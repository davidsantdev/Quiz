<script setup lang="ts">
import Header from '~/components/header.vue'

const { pontuacao, totalPerguntas, codigoFinal, reiniciar } = useQuiz()
const router = useRouter()

function jogarNovamente() {
  reiniciar()
  router.push('/')
}

const mensagem = computed(() => {
  const p = pontuacao.value
  if (p === totalPerguntas) return { emoji: '🏆', titulo: 'Perfeito!', texto: 'Você é o mestre das compras do Alô Pará!' }
  if (p >= 7)              return { emoji: '🛒', titulo: 'Muito bom!', texto: 'Você manja bem do nosso supermercado!' }
  if (p >= 5)              return { emoji: '🥇', titulo: 'Quase lá!', texto: 'Foi quase um carrinho cheio de acertos!' }
  return                          { emoji: '📝', titulo: 'Não foi dessa vez!', texto: 'Bora estudar os corredores e tentar de novo?' }
})
</script>

<template>
  <div class="brand-bg">
    <Header />

    <div class="flex flex-col items-center justify-center gap-4 px-4 py-6">

      <!-- título -->
      <div class="text-center">
        <h2 class="text-white text-2xl font-extrabold mb-1">Resultado</h2>
        <p class="text-white/55 text-xs font-medium w-64 mx-auto leading-snug">
          Tira print e manda no Instagram pra participar dos sorteios!
        </p>
      </div>

      <!-- card principal -->
      <div class="w-full max-w-xs rounded-xl shadow-xl px-6 py-6 flex flex-col items-center gap-4 brand-card">

        <!-- emoji + mensagem -->
        <div class="text-5xl" style="animation: pop-in 0.5s cubic-bezier(0.34,1.56,0.64,1);">{{ mensagem.emoji }}</div>
        <div class="text-center">
          <p class="text-white text-xl font-bold">{{ mensagem.titulo }}</p>
          <p class="text-white/55 text-xs mt-1">{{ mensagem.texto }}</p>
        </div>

        <!-- pontuação -->
        <div class="flex items-end gap-1.5">
          <span class="text-5xl font-bold text-brand">
            {{ pontuacao }}
          </span>
          <span class="text-xl text-white/40 mb-1.5 font-medium">/ {{ totalPerguntas }}</span>
        </div>

        <!-- barra de acertos -->
        <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            class="h-2 rounded-full transition-all duration-700 brand-cta"
            :style="{ width: ((pontuacao / totalPerguntas) * 100) + '%' }"
          />
        </div>

        <!-- divisor -->
        <div class="w-full border-t border-white/10" />

        <!-- código especial -->
        <div class="flex flex-col items-center gap-1">
          <span class="text-brand text-[10px] font-bold uppercase brand-kicker">Seu código especial</span>
          <span class="text-lg font-bold tracking-[0.2em] text-white bg-white/5 border border-white/10 rounded-lg px-5 py-2">
            {{ codigoFinal }}
          </span>
        </div>

      </div>

      <!-- botão tentar novamente -->
      <button
        class="px-8 py-3 rounded-lg text-white font-bold text-[13px] uppercase brand-kicker shadow-lg shadow-brand-dark/50 transition-all duration-200 active:scale-95 brand-cta"
        @click="jogarNovamente"
      >
        Tentar novamente
      </button>

      <div class="w-full max-w-xs border-t border-white/10 my-2" />

      <CanaisOfertas
        titulo="Não perca a próxima oferta"
        subtitulo="Segue a gente pra saber de toda promoção em primeira mão."
      />

    </div>
  </div>
</template>

<style scoped>
@keyframes pop-in {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
