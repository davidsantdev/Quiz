<script setup lang="ts">
import Header from '~/components/header.vue'

const { perguntaAtual, indiceAtual, totalPerguntas,
        respostas, finalizado, responder, avancar } = useQuiz()

const router = useRouter()

const respostaAtual = computed(
  () => respostas.value[indiceAtual.value] ?? null
)

const progresso = computed(
  () => ((indiceAtual.value / totalPerguntas) * 100).toFixed(0)
)

function avancarOuFinalizar() {
  if (finalizado.value) {
    router.push('/resultado')
  } else {
    avancar()
  }
}
</script>

<template>
  <div class="brand-bg">
    <Header />

    <div class="flex flex-col items-center justify-center px-4 py-5">

      <!-- header -->
      <div class="w-full max-w-md mb-3.5">
        <div class="flex justify-between items-center mb-1.5">
          <span class="text-zinc-500 text-[11px] font-bold uppercase brand-kicker">Pergunta {{ indiceAtual + 1 }} de {{ totalPerguntas }}</span>
          <span class="text-zinc-500 text-[11px] font-bold">{{ progresso }}%</span>
        </div>

        <!-- barra de progresso -->
        <div class="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            class="h-1.5 bg-brand rounded-full transition-all duration-500"
            :style="{ width: progresso + '%' }"
          />
        </div>
      </div>

      <!-- card principal -->
      <div class="w-full max-w-md rounded-xl shadow-xl overflow-hidden brand-card">
        <transition name="slide" mode="out-in">
          <PerguntaCard
            :key="perguntaAtual?.id"
            :pergunta="perguntaAtual"
            :resposta-selecionada="respostaAtual"
            @selecionar="responder"
          />
        </transition>
      </div>

      <!-- botão próxima -->
      <transition name="fade">
        <button
          v-if="respostaAtual !== null"
          class="mt-5 px-8 py-3 rounded-lg text-white font-bold text-[13px] uppercase brand-kicker shadow-lg shadow-brand-dark/50 transition-all duration-200 active:scale-95 brand-cta"
          @click="avancarOuFinalizar"
        >
          {{ finalizado ? 'Ver resultado' : 'Próxima pergunta' }}
        </button>
      </transition>

    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
</style>
