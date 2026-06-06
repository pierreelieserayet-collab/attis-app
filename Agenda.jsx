import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://hkicyucebizazhqcvfht.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhraWN5dWNlYml6YXpocWN2Zmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3MDM0OTMsImV4cCI6MjA5NjI3OTQ5M30.WFGPyzBzUjwQz0sFx864rUIpr_BRTGU-9dPuUFRNgBg'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export async function getLivraisons() {
  const { data, error } = await supabase
    .from('livraisons')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function addLivraison({ commande, jour, creneau }) {
  const { data, error } = await supabase
    .from('livraisons')
    .insert([{ commande: commande.toUpperCase(), jour, creneau, statut: 'planifiee' }])
    .select()
  if (error) throw error
  return data[0]
}

export async function updateLivraison(id, updates) {
  const { data, error } = await supabase
    .from('livraisons')
    .update(updates)
    .eq('id', id)
    .select()
  if (error) throw error
  return data[0]
}

export async function deleteLivraison(id) {
  const { error } = await supabase
    .from('livraisons')
    .delete()
    .eq('id', id)
  if (error) throw error
}

export async function getLivraisonByCommande(commande) {
  const { data, error } = await supabase
    .from('livraisons')
    .select('*')
    .eq('commande', commande.toUpperCase())
  if (error) throw error
  return data
}
