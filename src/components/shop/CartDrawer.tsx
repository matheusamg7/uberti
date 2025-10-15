'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, Loader2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CartItemWithProduct } from '@/types/product';

interface CartDrawerProps {
  locale: 'en' | 'pt' | 'es';
  trigger?: React.ReactNode;
}

interface CartSummary {
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
}

export function CartDrawer({ locale, trigger }: CartDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
  const [cartSummary, setCartSummary] = useState<CartSummary>({
    itemCount: 0,
    subtotal: 0,
    shipping: 0,
    total: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [updatingItems, setUpdatingItems] = useState<Set<string>>(new Set());

  // Load cart when drawer opens
  useEffect(() => {
    if (isOpen) {
      loadCart();
    }
  }, [isOpen]);

  const loadCart = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/cart');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setCartItems(data.data.items || []);
          setCartSummary(data.data.summary || {
            itemCount: 0,
            subtotal: 0,
            shipping: 0,
            total: 0,
          });
        }
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    setUpdatingItems(prev => new Set(prev).add(itemId));

    try {
      const response = await fetch(`/api/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (response.ok) {
        await loadCart(); // Reload cart to get updated totals
      }
    } catch (error) {
      console.error('Failed to update cart item:', error);
    } finally {
      setUpdatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  const removeItem = async (itemId: string) => {
    setUpdatingItems(prev => new Set(prev).add(itemId));

    try {
      const response = await fetch(`/api/cart/${itemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await loadCart();
      }
    } catch (error) {
      console.error('Failed to remove cart item:', error);
      setUpdatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat(
      locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : 'en-US',
      {
        style: 'currency',
        currency: locale === 'pt' ? 'BRL' : locale === 'es' ? 'EUR' : 'USD',
      }
    );
    return formatter.format(price);
  };

  const labels = {
    cart: { en: 'Shopping Bag', pt: 'Sacola de Compras', es: 'Bolsa de Compras' },
    empty: { en: 'Your bag is empty', pt: 'Sua sacola está vazia', es: 'Tu bolsa está vacía' },
    emptyDescription: {
      en: 'Discover our collections and add some beautiful pieces to your bag.',
      pt: 'Descubra nossas coleções e adicione algumas peças lindas à sua sacola.',
      es: 'Descubre nuestras colecciones y añade algunas piezas hermosas a tu bolsa.',
    },
    browseCatalog: { en: 'Browse Catalog', pt: 'Ver Catálogo', es: 'Ver Catálogo' },
    subtotal: { en: 'Subtotal', pt: 'Subtotal', es: 'Subtotal' },
    shipping: { en: 'Shipping', pt: 'Envio', es: 'Envío' },
    free: { en: 'Free', pt: 'Grátis', es: 'Gratis' },
    total: { en: 'Total', pt: 'Total', es: 'Total' },
    checkout: { en: 'Checkout', pt: 'Finalizar Compra', es: 'Finalizar Compra' },
    viewCart: { en: 'View Bag', pt: 'Ver Sacola', es: 'Ver Bolsa' },
    remove: { en: 'Remove', pt: 'Remover', es: 'Remover' },
    quantity: { en: 'Quantity', pt: 'Quantidade', es: 'Cantidad' },
  };

  const defaultTrigger = (
    <Button variant="ghost" size="sm" className="btn-minimal relative">
      <ShoppingBag className="h-4 w-4" />
      {cartSummary.itemCount > 0 && (
        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center text-[10px]">
          {cartSummary.itemCount}
        </span>
      )}
    </Button>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {trigger || defaultTrigger}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-left">
            {labels.cart[locale]} ({cartSummary.itemCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/50" />
              <div>
                <h3 className="font-medium text-foreground">{labels.empty[locale]}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                  {labels.emptyDescription[locale]}
                </p>
              </div>
              <Button onClick={() => setIsOpen(false)} asChild>
                <Link href={`/${locale}/collections`}>
                  {labels.browseCatalog[locale]}
                </Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const isUpdating = updatingItems.has(item.id);
                    const productName = item.product[`name_${locale}` as keyof typeof item.product] as string;

                    return (
                      <div key={item.id} className={`${isUpdating ? 'opacity-50' : ''}`}>
                        <div className="flex gap-3">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <div className="h-24 w-20 sm:h-28 sm:w-24 overflow-hidden rounded bg-muted">
                              {item.product.images?.[0] && (
                                <Image
                                  src={item.product.images[0]}
                                  alt={productName}
                                  width={96}
                                  height={112}
                                  className="h-full w-full object-cover"
                                />
                              )}
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0 flex flex-col">
                            <div className="flex justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-foreground line-clamp-2">
                                  {productName}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {item.product.sku}
                                </p>
                                {item.size && (
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {locale === 'pt' ? 'Tamanho:' : locale === 'es' ? 'Talla:' : 'Size:'} {item.size}
                                  </p>
                                )}
                                {/* Price - logo abaixo das informações */}
                                <p className="text-sm font-semibold text-foreground mt-2">
                                  {formatPrice(item.product.price * item.quantity)}
                                </p>
                              </div>

                              {/* Remove Button */}
                              <div className="flex-shrink-0">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive"
                                  onClick={() => removeItem(item.id)}
                                  disabled={isUpdating}
                                >
                                  <X className="h-3.5 w-3.5" />
                                  <span className="sr-only">{labels.remove[locale]}</span>
                                </Button>
                              </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mt-auto pt-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                disabled={isUpdating || item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-medium min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-7 w-7 p-0"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={isUpdating}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Cart Summary */}
              <div className="border-t border-border pt-4 pb-2 space-y-4">
                <div className="space-y-2.5 px-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{labels.subtotal[locale]}</span>
                    <span className="font-medium">{formatPrice(cartSummary.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{labels.shipping[locale]}</span>
                    <span className="font-medium text-green-600">
                      {cartSummary.shipping === 0 ? labels.free[locale] : formatPrice(cartSummary.shipping)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between pt-1">
                    <span className="font-semibold text-base">{labels.total[locale]}</span>
                    <span className="font-semibold text-base">{formatPrice(cartSummary.total)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2.5">
                  <Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                    asChild
                  >
                    <Link href={`/${locale}/cart`}>
                      {labels.viewCart[locale]}
                    </Link>
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full"
                    asChild
                  >
                    <Link href={`/${locale}/checkout`}>
                      {labels.checkout[locale]}
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}