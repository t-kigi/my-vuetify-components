import { mount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';

import EventMessageBoard from '~/components/ui/EventMessageBoard';

describe('EventMessageBoard', () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    jest.useFakeTimers();
  });

  it('is a Vue instance', () => {
    const wrapper = mount(EventMessageBoard, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it('shows all messages', () => {
    const wrapper = mount(EventMessageBoard, {
      localVue,
      vuetify,
      data() {
        return {
          messages: [
            {
              message: 'HELLO',
              key: 'testkey-1',
            },
            {
              message: 'WORLD!',
              key: 'testkey-2',
            },
          ],
        };
      },
    });

    expect(wrapper.html()).toMatch(/HELLO/);
    expect(wrapper.html()).toMatch(/WORLD!/);
  });

  it('works add content', async () => {
    const wrapper = mount(EventMessageBoard, {
      localVue,
      vuetify,
    });

    expect(wrapper.html()).not.toMatch(/HELLO WORLD!/);

    wrapper.vm.add('HELLO WORLD!');
    await wrapper.vm.$nextTick(); // apply changes and re-rendering

    expect(wrapper.html()).toMatch(/HELLO WORLD!/);
  });

  it('removes timeout content', async () => {
    const wrapper = mount(EventMessageBoard, {
      localVue,
      vuetify,
      propsData: {
        timeout: 1234,
      },
    });

    wrapper.vm.add('TIMEOUTS!');
    await wrapper.vm.$nextTick();

    expect(setTimeout).toHaveBeenCalledTimes(1); // setTimeout が1回呼ばれた
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1234);
    expect(wrapper.html()).toMatch(/TIMEOUTS!/);

    // jest の fake timer を起動して反映させる
    jest.runAllTimers();
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).not.toMatch(/TIMEOUTS!/);
  });

  it('checks invalid messages array', async () => {
    const wrapper = mount(EventMessageBoard, {
      localVue,
      vuetify,
    });

    // Timeout で削除される前に messages が空になってしまった
    wrapper.vm.add('INVALIDS!');
    wrapper.vm.messages = [];
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).not.toMatch(/INVALIDS!/);

    // jest の fake timer を起動して反映させる
    jest.runAllTimers();
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).not.toMatch(/INVALIDS!/);
  });
});
