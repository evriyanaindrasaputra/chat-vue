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

      if (props.variant)
        result.push(`btn--${props.variant}`)

      if (props.color)
        result.push(`btn--${props.color}`)

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
    :class="classNames"
  >
    <slot />
  </button>
</template>

<style lang="postcss">
.btn {
  @apply inline-flex font-medium disabled:opacity-50 disabled:pointer-events-none ;

  > svg {
    @apply self-center;
  }

  /*
  * Button has 4 different sizing
  * eg: sm, md, and lg
  */

  &--sm {
    @apply px-3 py-2 gap-2 text-base rounded-sm ;
  }

  &--md {
    @apply px-4 py-2 gap-[10px] text-base rounded-[5px] ;
  }

  &--lg {
    @apply px-8 py-5 gap-4 text-base rounded;
  }

  &--solid {
    @apply border border-solid hover:shadow-lg   text-white;
    > svg > path {
      @apply fill-white
    }
    &.btn {
      &--primary {
        @apply bg-primary-one hover:bg-primary-one/90 ;
      }
      &--indicator {
        @apply bg-indicator-one hover:bg-indicator-one/90 ;
      }
      &--indicator-two {
        @apply bg-indicator-two hover:bg-indicator-two/90 ;
      }
      &--secondary {
        @apply bg-primary-three
      }
    }
  }

  &--light {
    @apply border border-solid hover:shadow-lg   bg-light;
    &.btn {
      &--primary {
        @apply text-primary-one hover:text-primary-one/90 ;
        > svg > path {
          @apply fill-primary-one
        }
      }
      &--indicator {
        @apply text-indicator-one hover:text-indicator-one/90 ;
        > svg > path {
          @apply fill-indicator-one
        }
      }
      &--indicator-two {
        @apply text-indicator-two hover:text-indicator-two/90 ;
        > svg > path {
          @apply fill-indicator-two
        }
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
      @apply p-2 ;
    }

    &.btn--md {
      @apply p-4 w-[60px] h-[60px];
    }

    &.btn--lg {
      @apply p-5;
    }
  }

  &--pill {
    @apply rounded-full;
  }
}
</style>
