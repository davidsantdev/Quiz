<script setup>
import { Check, ShoppingCart, X } from '@lucide/vue'

const TEMPO_TOTAL = 15

const props = defineProps({
  pergunta: Object,
  respostaSelecionada: { type: Number, default: null },
})
const emit = defineEmits(['selecionar'])

const selecionado = ref(null)
const tempoRestante = ref(TEMPO_TOTAL)
let intervalo = null

function pararTimer() {
  if (intervalo) {
    clearInterval(intervalo)
    intervalo = null
  }
}

function iniciarTimer() {
  pararTimer()
  tempoRestante.value = TEMPO_TOTAL
  intervalo = setInterval(() => {
    if (tempoRestante.value <= 1) {
      tempoRestante.value = 0
      pararTimer()
      if (selecionado.value === null) selecionar(-1)
      return
    }
    tempoRestante.value--
  }, 1000)
}

watch(() => props.pergunta, () => {
  selecionado.value = null
  iniciarTimer()
})

onMounted(iniciarTimer)
onUnmounted(pararTimer)

function selecionar(i) {
  if (selecionado.value !== null) return
  selecionado.value = i
  pararTimer()
  emit('selecionar', i)
}

const progressoTempo = computed(() => (tempoRestante.value / TEMPO_TOTAL) * 100)
const tempoCritico = computed(() => tempoRestante.value <= 5)

function classeOpcao(i) {
  if (selecionado.value === null)
    return 'border border-white/10 bg-white/3 text-white hover:bg-white/5 hover:border-brand/60'
  if (i === props.pergunta.correta)
    return 'border border-emerald-500/60 bg-emerald-500/10 text-emerald-400'
  if (i === selecionado.value)
    return 'border border-rose-500/60 bg-rose-500/10 text-rose-400'
  return 'border border-white/5 bg-white/2 text-white/30 opacity-50'
}

function iconeOpcao(i) {
  if (selecionado.value === null) return null
  if (i === props.pergunta.correta) return Check
  if (i === selecionado.value) return X
  return null
}
</script>

<template>
  <div class="flex flex-col items-center px-4 py-5">

    <!-- topo: selo + cronômetro -->
    <div class="w-full flex items-center justify-between mb-4">
      <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-white/3 border border-white/10">
        <ShoppingCart class="w-4 h-4 text-brand" stroke-width="1.8" />
      </span>

      <div
        class="flex items-center justify-center w-9 h-9 rounded-full border-2 bg-white/3 font-bold text-sm tabular-nums transition-colors duration-300"
        :class="tempoCritico ? 'border-rose-500 text-rose-400' : 'border-brand/70 text-brand'"
      >
        {{ tempoRestante }}
      </div>
    </div>

    <!-- barra de tempo -->
    <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-5">
      <div
        class="h-1 rounded-full transition-all duration-1000 ease-linear"
        :class="tempoCritico ? 'bg-rose-500' : 'bg-brand'"
        :style="{ width: progressoTempo + '%' }"
      />
    </div>

    <!-- pergunta -->
    <p class="text-white text-[17px] font-extrabold text-center leading-snug mb-5">
      {{ pergunta.texto }}
    </p>

    <!-- opções -->
    <div class="flex flex-col gap-2 w-full max-w-md">
      <button
        v-for="(opcao, i) in pergunta.opcoes"
        :key="i"
        :class="['rounded-lg px-3.5 py-3 text-[13px] font-semibold transition-all duration-300 w-full text-left flex items-center gap-2.5', classeOpcao(i)]"
        @click="selecionar(i)"
      >
        <span class="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-[11px] font-bold shrink-0">{{ ['A', 'B', 'C', 'D'][i] }}</span>
        <span class="flex-1">{{ opcao }}</span>
        <component :is="iconeOpcao(i)" v-if="iconeOpcao(i)" class="w-4 h-4 shrink-0" stroke-width="2.5" />
      </button>
    </div>

    <p v-if="selecionado === -1" class="mt-4 text-rose-400 text-xs font-semibold">Tempo esgotado!</p>
  </div>
</template>
