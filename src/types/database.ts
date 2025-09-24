export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          phone: string | null
          is_admin: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          phone?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          phone?: string | null
          is_admin?: boolean
          updated_at?: string
        }
      }
      collections: {
        Row: {
          id: string
          slug: string
          name_en: string
          name_pt: string
          name_es: string
          description_en: string | null
          description_pt: string | null
          description_es: string | null
          story_en: string | null
          story_pt: string | null
          story_es: string | null
          hero_image: string | null
          is_active: boolean
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          slug: string
          name_en: string
          name_pt: string
          name_es: string
          description_en?: string | null
          description_pt?: string | null
          description_es?: string | null
          story_en?: string | null
          story_pt?: string | null
          story_es?: string | null
          hero_image?: string | null
          is_active?: boolean
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name_en?: string
          name_pt?: string
          name_es?: string
          description_en?: string | null
          description_pt?: string | null
          description_es?: string | null
          story_en?: string | null
          story_pt?: string | null
          story_es?: string | null
          hero_image?: string | null
          is_active?: boolean
          display_order?: number
        }
      }
      categories: {
        Row: {
          id: string
          slug: string
          name_en: string
          name_pt: string
          name_es: string
          display_order: number
        }
        Insert: {
          id?: string
          slug: string
          name_en: string
          name_pt: string
          name_es: string
          display_order?: number
        }
        Update: {
          id?: string
          slug?: string
          name_en?: string
          name_pt?: string
          name_es?: string
          display_order?: number
        }
      }
      products: {
        Row: {
          id: string
          sku: string
          slug: string
          collection_id: string
          category_id: string
          name_en: string
          name_pt: string
          name_es: string
          description_en: string | null
          description_pt: string | null
          description_es: string | null
          price: number
          stock_quantity: number
          images: string[]
          sizes: string[] | null
          is_active: boolean
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          sku: string
          slug: string
          collection_id: string
          category_id: string
          name_en: string
          name_pt: string
          name_es: string
          description_en?: string | null
          description_pt?: string | null
          description_es?: string | null
          price: number
          stock_quantity?: number
          images?: string[]
          sizes?: string[] | null
          is_active?: boolean
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          sku?: string
          slug?: string
          collection_id?: string
          category_id?: string
          name_en?: string
          name_pt?: string
          name_es?: string
          description_en?: string | null
          description_pt?: string | null
          description_es?: string | null
          price?: number
          stock_quantity?: number
          images?: string[]
          sizes?: string[] | null
          is_active?: boolean
          featured?: boolean
          updated_at?: string
        }
      }
      cart_items: {
        Row: {
          id: string
          user_id: string
          product_id: string
          quantity: number
          size: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          quantity: number
          size?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          quantity?: number
          size?: string | null
        }
      }
      orders: {
        Row: {
          id: string
          order_number: string
          user_id: string
          status: 'pending' | 'processing' | 'shipped' | 'delivered'
          subtotal: number
          shipping: number
          total: number
          shipping_address: Json
          created_at: string
        }
        Insert: {
          id?: string
          order_number: string
          user_id: string
          status?: 'pending' | 'processing' | 'shipped' | 'delivered'
          subtotal: number
          shipping: number
          total: number
          shipping_address: Json
          created_at?: string
        }
        Update: {
          id?: string
          order_number?: string
          user_id?: string
          status?: 'pending' | 'processing' | 'shipped' | 'delivered'
          subtotal?: number
          shipping?: number
          total?: number
          shipping_address?: Json
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          size: string | null
          price_at_time: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          size?: string | null
          price_at_time: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          size?: string | null
          price_at_time?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      order_status: 'pending' | 'processing' | 'shipped' | 'delivered'
    }
  }
}