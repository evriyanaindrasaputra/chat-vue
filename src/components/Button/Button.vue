<script lang="ts">
import type { PropType } from 'vue'
import {
  computed,
  defineComponent,
} from 'vue'

import type {
  ColorVariant,
  SizeVariant,
  StyleVariant,
} from '.'

export default defineComponent({
  props: {
    variant: {
      type: String as PropType<StyleVariant>,
      default: 'solid',
    },
    color: {
      type: String as PropType<ColorVariant>,
      default: 'primary',
    },
    size: {
      type: String as PropType<SizeVariant>,
      default: 'md',
    },
    icon: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classNames = computed(() => {
      const result: string[] = ['btn']

      if (props.color)
        result.push(`btn--${props.color}`)

      if (props.variant)
        result.push(`btn--${props.variant}`)

      if (props.size)
        result.push(`btn--${props.size}`)

      if (props.icon)
        result.push('btn--icon')

      if (props.pill)
        result.push('btn--pill')

      return result
    })

    return { classNames }
  },
})
</script>

<template>
  <button
    data-testid="btn"
    :class="classNames"
  >
    <slot />
  </button>
</template>

<style lang="postcss">
.btn {
  @apply inline-flex font-medium disabled:opacity-50 disabled:pointer-events-none;

  > svg {
    @apply self-baseline;
  }

  /*
  * Button has 4 different sizing
  * eg: xs, sm, md, and lg
  */

  &--sm {
    @apply px-4 py-2 gap-2 text-base rounded-sm;
  }

  &--md {
    @apply px-5 py-3 gap-3 text-base rounded;
  }

  &--lg {
    @apply px-8 py-5 gap-4 text-base rounded;
  }

  /*
  * Button solid is the
  * default style variant
  */
  &--solid {
    @apply border border-solid hover:shadow-lg focus:shadow-none active:shadow-none text-white;

    &.btn {
      &--primary {
        @apply bg-blue-500 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-800;
      }
    }
  }

  /**
  * Button icon variant
  */
  &--icon {
    &.btn--xs {
      @apply p-1;
    }

    &.btn--sm {
      @apply p-2;
    }

    &.btn--md {
      @apply p-3;
    }

    &.btn--lg {
      @apply p-4;
    }
  }

  &--pill {
    @apply rounded-full;
  }
}
</style>
