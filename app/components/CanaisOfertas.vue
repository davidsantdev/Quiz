<script setup lang="ts">
import { ChevronRight, Globe, Smartphone } from '@lucide/vue'
import { canais } from '~/composables/canais'

withDefaults(defineProps<{
  titulo?: string
  subtitulo?: string
}>(), {
  titulo: 'Como fico sabendo das ofertas?',
  subtitulo: 'Acompanhe o Alô Pará e não perca nenhuma promoção.',
})

function tagAcessivel(href: string) {
  return href ? 'a' : 'div'
}
</script>

<template>
  <section class="w-full max-w-xs">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-2.5 h-0.5 bg-brand shrink-0" />
      <h2 class="text-brand text-[11px] font-bold uppercase brand-kicker">Canais oficiais</h2>
    </div>
    <div class="text-left mb-3 -mt-1">
      <h3 class="text-white text-[15px] font-extrabold">{{ titulo }}</h3>
      <p class="text-zinc-500 text-xs mt-1 leading-snug">{{ subtitulo }}</p>
    </div>

    <div class="brand-card rounded-xl overflow-hidden divide-y divide-white/8">

      <!-- Instagram -->
      <component
        :is="tagAcessivel(canais.instagram.href)"
        :href="canais.instagram.href || undefined"
        target="_blank" rel="noopener"
        class="flex items-center gap-3 px-3.5 py-3 active:bg-white/5 transition-colors"
      >
        <span class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style="background: radial-gradient(circle at 30% 105%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);">
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </span>
        <span class="flex-1 min-w-0">
          <span class="block text-white text-[13px] font-bold leading-tight">{{ canais.instagram.label }}</span>
          <span class="block text-white/45 text-[11px] leading-tight truncate">{{ canais.instagram.handle }}</span>
        </span>
        <ChevronRight :size="16" class="text-white/25 shrink-0" />
      </component>

      <!-- WhatsApp -->
      <component
        :is="tagAcessivel(canais.whatsapp.href)"
        :href="canais.whatsapp.href || undefined"
        target="_blank" rel="noopener"
        class="flex items-center gap-3 px-3.5 py-3 active:bg-white/5 transition-colors"
      >
        <span class="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.213-3.76.893.952-3.653-.234-.374A9.818 9.818 0 1112 21.818z"/></svg>
        </span>
        <span class="flex-1 min-w-0">
          <span class="block text-white text-[13px] font-bold leading-tight">{{ canais.whatsapp.label }}</span>
          <span class="block text-white/45 text-[11px] leading-tight truncate">{{ canais.whatsapp.handle }}</span>
        </span>
        <ChevronRight :size="16" class="text-white/25 shrink-0" />
      </component>

      <!-- Site -->
      <component
        :is="tagAcessivel(canais.site.href)"
        :href="canais.site.href || undefined"
        target="_blank" rel="noopener"
        class="flex items-center gap-3 px-3.5 py-3 transition-colors"
        :class="canais.site.href ? 'active:bg-white/5' : 'opacity-50'"
      >
        <span class="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shrink-0">
          <Globe class="w-3.5 h-3.5 text-white" stroke-width="2" />
        </span>
        <span class="flex-1 min-w-0">
          <span class="block text-white text-[13px] font-bold leading-tight">{{ canais.site.label }}</span>
          <span class="block text-white/45 text-[11px] leading-tight truncate">{{ canais.site.href ? canais.site.handle : 'Em breve' }}</span>
        </span>
        <ChevronRight :size="16" class="text-white/25 shrink-0" />
      </component>

      <!-- App -->
      <component
        :is="tagAcessivel(canais.app.href)"
        :href="canais.app.href || undefined"
        target="_blank" rel="noopener"
        class="flex items-center gap-3 px-3.5 py-3 transition-colors"
        :class="canais.app.href ? 'active:bg-white/5' : 'opacity-50'"
      >
        <span class="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shrink-0">
          <Smartphone class="w-3.5 h-3.5 text-white" stroke-width="2" />
        </span>
        <span class="flex-1 min-w-0">
          <span class="block text-white text-[13px] font-bold leading-tight">{{ canais.app.label }}</span>
          <span class="block text-white/45 text-[11px] leading-tight truncate">{{ canais.app.href ? canais.app.handle : 'Em breve' }}</span>
        </span>
        <ChevronRight :size="16" class="text-white/25 shrink-0" />
      </component>

    </div>
  </section>
</template>
