import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import box from '@/components/box'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  });
  it('should show all the links', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('a').length)
    .to.equal(0)
  })
  it('displays items from the list', () => {
    const Constructor = Vue.extend(HelloWorld);
    const ListComponent = new Constructor().$mount();
    expect(ListComponent.$el.textContent).to.contain('sleep');
  })
  it('box should have text', () => {
    const Constructor = Vue.extend(box);
    const BoxComponent = new Constructor().$mount();
    expect(BoxComponent.$el.textContent).to.contain('');
  })
})
