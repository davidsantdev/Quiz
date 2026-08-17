<script setup lang="ts">
import Header from '~/components/header.vue';
import { Play } from '@lucide/vue';
</script>

<template>
    <div class="brand-bg flex flex-col">
        <Header/>

        <div class="flex flex-col items-center px-4 pt-8 pb-10 text-center">

            <span class="bg-brand text-white text-[10px] font-bold uppercase brand-kicker rounded px-2.5 py-1 mb-5">
                Quiz oficial
            </span>

            <span class="text-zinc-500 text-[11px] font-bold uppercase brand-kicker mb-1.5">Bem-vindo ao</span>

            <h1 class="text-white text-[34px] leading-[1.05] font-extrabold tracking-tight max-w-xs" style="font-family: 'Nunito', sans-serif;">
                Quiz <span class="text-brand">Alô Pará</span>
            </h1>

            <p class="text-zinc-400 text-[11px] font-bold uppercase brand-kicker mt-2">Responda e concorra a um prêmio</p>

            <p class="text-zinc-500 text-[13px] max-w-xs mt-3 leading-relaxed">
                Os primeiros a enviar a pontuação pelo Instagram levam um vale-compras. É rápido e gratuito.
            </p>

            <div class="flex items-center gap-2.5 mt-6">
                <NuxtLink to="/quiz" class="flex items-center gap-2 active:scale-95 transition-transform duration-150 rounded-lg pl-3 pr-5 py-2.5 brand-cta shadow-lg shadow-brand-dark/50">
                    <Play :size="14" class="text-white" fill="currentColor" />
                    <span class="text-white font-bold text-[13px] uppercase brand-kicker">Começar quiz</span>
                </NuxtLink>
                <a href="#ofertas" class="flex items-center rounded-lg px-5 py-2.5 brand-outline-btn active:scale-95 transition-transform duration-150">
                    <span class="text-white font-bold text-[13px] uppercase brand-kicker">Ofertas</span>
                </a>
            </div>

            <div class="w-full max-w-xs border-t border-white/10 mt-9 pt-6 grid grid-cols-3 gap-2">
                <div>
                    <p class="text-white text-xl font-extrabold"><span class="text-brand">11</span></p>
                    <p class="text-zinc-500 text-[9px] font-bold uppercase brand-kicker mt-0.5">Perguntas</p>
                </div>
                <div>
                    <p class="text-white text-xl font-extrabold"><span class="text-brand">100%</span></p>
                    <p class="text-zinc-500 text-[9px] font-bold uppercase brand-kicker mt-0.5">Grátis</p>
                </div>
                <div>
                    <p class="text-white text-xl font-extrabold"><span class="text-brand">1</span></p>
                    <p class="text-zinc-500 text-[9px] font-bold uppercase brand-kicker mt-0.5">Prêmio</p>
                </div>
            </div>

            <div id="ofertas" class="w-full max-w-xs mt-9 scroll-mt-6">
                <CanaisOfertas />
            </div>

        </div>
    </div>
</template>
