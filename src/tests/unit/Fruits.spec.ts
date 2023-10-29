import { mount } from '@vue/test-utils';
import FruitsList from '../../components/FruitsList.vue'; 
import 'jest-localstorage-mock';


describe('FruitsList', () => {
  it('renders without errors', () => {
    const wrapper = mount(FruitsList);
    expect(wrapper.exists()).toBe(true);
  });

  it('initially has a closed dropdown', () => {
    const wrapper = mount(FruitsList);
    expect(wrapper.vm.isDropdownOpen).toBe(false);
  });

  it('toggles the dropdown when the arrow is clicked', async () => {
    const wrapper = mount(FruitsList);
    const arrowIcon = wrapper.find('[data-testid="arrow-down"]');
    
    // Verifica que el dropdown esté cerrado al principio
    expect(wrapper.vm.isDropdownOpen).toBe(false);
    
    // Simula un clic en el botón de flecha
    await arrowIcon.trigger('click');
    
    // Verifica que el dropdown esté abierto después de hacer clic
    expect(wrapper.vm.isDropdownOpen).toBe(true);
  });
});
