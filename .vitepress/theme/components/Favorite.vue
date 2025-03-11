<script setup lang="ts">
import { SignedIn, SignedOut, SignInButton, UserButton, useSession, useUser } from '@clerk/vue'
import { onMounted } from 'vue'

const { isLoaded, user } = useUser()
const { isLoaded: isLoadedSession, session } = useSession()

console.log(user.value)
console.log(session.value)
</script>

<template>
  <div style="display: flex; margin-left: 10px;">
    <SignedOut>
      
    </SignedOut>
    <SignedIn>
        <form @submit="createFavorite">
            <button type="submit">Adicionar aos favoritos</button>
        </form>
    </SignedIn>
  </div>
</template>




<!-- 
<script setup>
import { createClient } from '@supabase/supabase-js'
import { useUser, useSession } from '@clerk/vue'
import { ref, onMounted, watch } from 'vue'

// Create a single supabase client for interacting with your database
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const user = useUser()
const { session } = useSession()

function createClerkSupabaseClient() {
    return createClient(supabaseUrl, supabaseKey, {
        global: {
          fetch: async (url, options = {}) => {
            // Adicionar mais logs para debug
            console.log('Session state:', {
              exists: !!session.value,
              active: session.value?.status === 'active'
            })

            const clerkToken = await session.value?.getToken({
              template: 'supabase',
            })
            
            // Log mais detalhado do token
            console.log('Clerk Token:', {
              exists: !!clerkToken,
              preview: clerkToken ? `${clerkToken.substring(0, 10)}...` : null
            })
            
            if (!clerkToken) {
              throw new Error('Não foi possível gerar o token Supabase - Usuário não autenticado')
            }

            const headers = new Headers(options?.headers)
            headers.set('Authorization', `Bearer ${clerkToken}`)

            return fetch(url, {
              ...options,
              headers,
            })
          },
        }
    })
}

const supabase = createClerkSupabaseClient()

// TODO: Add RLS function @see https://clerk.com/docs/integrations/databases/supabase

const addFavorite = async () => {
    try {
        // Debug: Verificar se o usuário está autenticado
        console.log('User:', user.value ? 'Autenticado' : 'Não autenticado')
        
        if (!user.value) {
            console.error('Usuário não está autenticado')
            return null
        }

        // Debug: Log antes da chamada ao Supabase
        console.log('Tentando adicionar favorito para:', window.location.pathname)
        
        const { data, error } = await supabase.from('favorites').insert({
            slug: window.location.pathname,
            user_id: user.value.id  // Adicionar user_id explicitamente
        })
        
        // Debug: Log do resultado
        console.log('Resultado do insert:', { data, error })
        
        if (error) {
            console.error('Erro ao adicionar favorito:', error)
            return null
        }
        return data
    } catch (e) {
        console.error('Erro ao adicionar favorito:', e)
        return null
    }
}

const createFavorite = async (e) => {
    e.preventDefault()
    const result = await addFavorite()
    if (result) {
        favorite.value = await loadFavorite()
    }
}

const loadFavorite = async () => {
    try {
        // Verificar se o usuário está autenticado antes de fazer a requisição
        if (!user.value) {
            console.log('Usuário não autenticado, não carregando favoritos')
            return null
        }

        // Debug: Log do user ID e slug
        console.log('Carregando favoritos com:', {
            user_id: user.value.id,
            slug: window.location.pathname
        })
        
        const { data, error } = await supabase
            .from('favorites')
            .select('*')
            .eq('slug', window.location.pathname)
            .eq('user_id', user.value.id)
            .single() // Retorna apenas um resultado ou null
        
        // Debug: Log detalhado do resultado
        console.log('Resposta completa do Supabase:', { data, error })
        
        if (error && error.code !== 'PGRST116') { // Ignora erro de "não encontrado"
            console.error('Erro ao carregar favoritos:', error)
            return null
        }
        return data ? [data] : [] // Retorna array vazio se não encontrar
    } catch (e) {
        console.error('Erro ao carregar favoritos (catch):', e)
        return null
    }
}

const favorite = ref([])

// Adicionar watch para o usuário com mais logs de debug
watch(() => user.value, async (newUser) => {
    console.log('Estado atual da sessão:', {
        hasSession: !!session.value,
        sessionId: session.value?.id,
        hasUser: !!newUser,
        userId: newUser?.id,
        userEmail: newUser?.emailAddresses?.[0]?.emailAddress
    })

    if (newUser) {
        console.log('Usuário carregado:', newUser.id)
        favorite.value = await loadFavorite()
    } else {
        console.log('Usuário desconectado')
        console.log('Debug - session:', session.value)
        favorite.value = []
    }
}, { immediate: true })

// Adicionar verificação no onMounted
onMounted(() => {
    console.log('Component mounted - Estado inicial:', {
        hasSession: !!session.value,
        hasUser: !!user.value,
        userId: user.value?.id
    })
})
</script>

<template>
    <ClientOnly>
        <div class="favorite-container">
            <div v-if="favorite && favorite.length > 0" class="is-favorite">
                ⭐ Esta página está nos seus favoritos
            </div>
            <div v-else-if="favorite === null" class="loading-favorite">
                Carregando...
            </div>
            <div v-else class="not-favorite">
                <form @submit="createFavorite">
                    <button type="submit">Adicionar aos favoritos</button>
                </form>
            </div>
        </div>
    </ClientOnly>
</template>

<style scoped>
.favorite-container {
    margin: 1rem 0;
}

.is-favorite {
    color: #ffd700;
    font-weight: bold;
}

.loading-favorite {
    color: #666;
    font-style: italic;
}
</style>
-->