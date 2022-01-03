import { createI18n } from 'vue-i18n'

export default createI18n({
    locale: 'ru',

    messages: {
        ru: {
            review: '0 отзывов | {n} отзыв | {n} отзыва | {n} отзывов',
            product: '0 товаров | {n} товар | {n} товара | {n} товаров',
            productFound:
                'Найдено 0 товаров | Найден {n} товар | Найдено {n} товара | Найдено {n} товаров',
            viewed: 'Отображено | Отображён | Отображено | Отображено',
            salesCount:
                'Купили 0 раз | Купили {n} раз | Купили {n} раза | Купили {n} раз',
            salesCountAlready:
                'Уже купили 0 раз | Уже купили {n} раз | Уже купили {n} раза | Уже купили {n} раз',
            fromDays: 'от 0 дней | от {n} дня | от {n} дней | от {n} дней',
            found: 'Найдено | Найден | Найдено | Найдено',
            points: 'пунктов | пункт | пункта | пунктов'
        }
    },

    pluralizationRules: {
        /**
         * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
         * @param choicesLength {number} an overall amount of available choices
         * @returns a final choice index to select plural word by
         */
        ru(choice: number, choicesLength: number): 0 | 1 | 2 | 3 {
            if (choice === 0) {
                return 0
            }

            const teen = choice > 10 && choice < 20
            const endsWithOne = choice % 10 === 1

            if (choicesLength < 4) {
                return !teen && endsWithOne ? 1 : 2
            }
            if (!teen && endsWithOne) {
                return 1
            }
            if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
                return 2
            }

            return choicesLength < 4 ? 2 : 3
        }
    }
})
