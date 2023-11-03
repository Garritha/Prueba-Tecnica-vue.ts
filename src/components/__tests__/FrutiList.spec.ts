import { mount } from '@vue/test-utils';
import CustomSelect from '@/components/CustomSelect.vue'; // Asegúrate de importar correctamente el componente

describe('CustomSelect', () => {
  it('should render the component', () => {
    // Monta el componente
    const wrapper = mount(CustomSelect);

    // Asegúrate de que el componente se renderiza correctamente
    expect(wrapper.exists()).toBe(true);

    // Añade más pruebas según tus necesidades
  });

  it('should open the dropdown when the arrow icon is clicked', async () => {
    const wrapper = mount(CustomSelect);

    // Asegúrate de que el dropdown está cerrado inicialmente
    expect(wrapper.vm.isDropdownOpen).toBe(false);

    // Encuentra y haz clic en el icono de flecha
    const arrowIcon = wrapper.find('[data-testid="arrow-down"]');
    await arrowIcon.trigger('click');

    // Asegúrate de que el dropdown se ha abierto
    expect(wrapper.vm.isDropdownOpen).toBe(true);

    // Añade más pruebas según tus necesidades
  });

  it('should select a fruit when clicked', async () => {
    const wrapper = mount(CustomSelect);

    // Encuentra y haz clic en una fruta en el dropdown
    const fruitItem = wrapper.find('.dropdown-menu li');
    await fruitItem.trigger('click');

    // Asegúrate de que la fruta seleccionada coincide con la fruta en el componente
    expect(wrapper.vm.selectedFruit).toBe(fruitItem.text());

    // Asegúrate de que el dropdown se cierra
    expect(wrapper.vm.isDropdownOpen).toBe(false);

    // Añade más pruebas según tus necesidades
  });

  // Añade más pruebas según tus necesidades
});
