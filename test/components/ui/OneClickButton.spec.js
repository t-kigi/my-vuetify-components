import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';

import OneClickButton from '~/components/ui/OneClickButton.vue';

describe('OneClickButton', () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('is a Vue instance', () => {
    const wrapper = mount(OneClickButton, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('passes component arguments which props and slot data', async () => {
    // v-btn は別の Component なので Component をスタブする shallowMount を使うと失敗する
    const wrapper = mount(OneClickButton, {
      localVue,
      vuetify,
      propsData: { color: 'error' },
      slots: {
        default: 'Hello, World!',
      },
    });

    const button = wrapper.find('button');
    const classes = button.classes();

    // color 情報はそのまま class に書き出されるので default の success は存在しない
    // props で渡した error はそのままクラスになっている
    expect(classes).toContain('error');
    expect(classes).not.toContain('success');

    // button タグには slots.default で渡したラベルが入っている
    expect(button.text()).toBe('Hello, World!');

    // clickCallback なしで 初期状態で click した場合正常に動作する (デフォルト関数のテスト)
    await wrapper.find('button').trigger('click');
  });

  it('checks button disable status', async () => {
    const wrapper = mount(OneClickButton, {
      localVue,
      vuetify,
      propsData: {
        clickCallback: () => {
          // callback イベントが呼び出されるときはボタンは無効
          expect(wrapper.vm.disabled).toBe(true);
        },
      },
    });

    // 初期状態では有効
    expect(wrapper.vm.disabled).toBe(false);
    await wrapper.find('button').trigger('click');

    // click イベントが終わった時点でも有効
    expect(wrapper.vm.disabled).toBe(false);
  });

  it('raises exception in clickCallback', async () => {
    const wrapper = mount(OneClickButton, {
      localVue,
      vuetify,
      propsData: {
        clickCallback: () => {
          // callback イベントが呼び出されるときはボタンは無効
          expect(wrapper.vm.disabled).toBe(true);
          throw new Error('test fake error');
        },
      },
    });

    // 初期状態では有効
    expect(wrapper.vm.disabled).toBe(false);
    await wrapper.find('button').trigger('click');

    // clickCallback 内で例外が throw されても正常に終了する
    expect(wrapper.vm.disabled).toBe(false);
  });
});
