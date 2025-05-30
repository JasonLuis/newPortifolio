import {
  Quasar,
  QPage,
  QBtn,
  QBtnToggle,
  QToolbarTitle,
  QToolbar,
  QCard,
  QCardSection,
  QPageContainer,
  QDrawer,
  QLayout,
  QList,
  QHeader,
  QItemLabel,
  QIcon,
  QImg,
  QItemSection,
  QItem,
  QSeparator,
  QSpace,
  QAvatar,
  QInput,
  QSelect,
  Notify,
  QForm
} from 'quasar';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  const quasarUserOptions = {
    components: {
      QPage,
      QBtn,
      QBtnToggle,
      QToolbarTitle,
      QToolbar,
      QCard,
      QCardSection,
      QPageContainer,
      QList,
      QLayout,
      QDrawer,
      QHeader,
      QItemLabel,
      QIcon,
      QImg,
      QItemSection,
      QItem,
      QSeparator,
      QSpace,
      QAvatar,
      QInput,
      QSelect,
      QForm
    },
    plugins: {
      Notify
    }
  };

  nuxtApp.vueApp.use(Quasar, quasarUserOptions);
});
