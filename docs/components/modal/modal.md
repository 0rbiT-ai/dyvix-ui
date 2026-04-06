# Modal

The modal component is a core Dyvix UI component. It's a config driven, animated modal engine that supports multiple themes, animations, and validation presets out of the box.

## Attributes

- `title`
  - : `string`. Represents the header of the modal.
- `Id`
  - : `string`. A Unique ID for your modal, allowing more control for the developer.
- `Class`
  - : `string`. Contains a custom class for your modal, allowing more control for the developer.
- `type`
  - : `string`. Represents the type of the modal. Defaults to `form`.
- `theme`
  - : `string`. Controls the design and the feel of the modal.
- `animation`
  - : `string`. Controls the entrance animation of the modal.
- `elements`
  - : An array of objects that defines the internal fields of the modal. Each object supports the following attributes:
    - `amount`
      - : `number`. The number of inputs to display per row. Supported values are between 1 and 3.
    - `type`
      - : `string`. The type of input to render in this specific row.
    - `name`
      - : `string | string[]`. The key used in the `onSubmit` callback. If the amount is greater than 1 this must be provided as an array of strings with length matching that of the amount.
    - `placeholder`
      - : `string | string[]`. The text displayed when the input is empty. If the amount is greater than 1 this must be provided as an array of strings with length matching that of the amount.
    - `validation`
      - : `string | string[]`. Premade validation preset. If the amount is greater than 1 this must be provided as an array of strings with length matching that of the amount.
- `onSubmit`
  - : `function`. A callback function triggered upon form submission. It receives a single `data` object containing all input names along with their value.
- `onChange`
  - : `function`. A callback function triggered every time an input value changes. It receives a single `data` object containing all input names along with their value.
- `onClose`
  - : `function`. A callback function triggered upon form closure. Available only only when the modal `type` is set to `form`.

## Example

```jsx
import {
  Modal,
  DYVIX_MODAL_THEME,
  DYVIX_MODAL_VALIDATION_PRESET,
  DYVIX_GLOBAL_ANIMATION
} from 'dyvix-ui';

function ModalExample() {
  return (
    <Modal
      title="Register"
      Id="register-modal"
      Class="modal"
      theme={DYVIX_MODAL_THEME.SINGULARITY}
      animation={DYVIX_GLOBAL_ANIMATION.GLITCH}
      elements={[
        {
          type: 'text',
          placeholder: ['First Name', 'Last Name'],
          id: 'name',
          name: ['firstName', 'lastName'],
          className: 'ex-text',
          amount: 2
        },
        {
          type: 'email',
          placeholder: 'Email',
          validation: [DYVIX_MODAL_VALIDATION_PRESET.EMAIL],
          id: 'email',
          name: 'email',
          className: 'ex-text',
          amount: 1
        },
        {
          type: 'password',
          placeholder: 'Password',
          validation: [DYVIX_MODAL_VALIDATION_PRESET.PASSWORD],
          id: 'password',
          name: 'password',
          className: 'ex-text',
          amount: 1
        }
      ]}
      onSubmit={(data) => console.log(data)}
      onChange={(data) => console.log(data)}
    />
  );
}
```

## Available Themes 🎨

|                  Singularity                   |               Ember                |               Neon               |
| :--------------------------------------------: | :--------------------------------: | :------------------------------: |
| ![Singularity](/sitedemos/singularityanim.gif) | ![Ember](/sitedemos/emberanim.gif) | ![Neon](/sitedemos/neonanim.gif) |
|        `DYVIX_MODAL_THEME.SINGULARITY`         |     `DYVIX_MODAL_THEME.EMBER`      |     `DYVIX_MODAL_THEME.NEON`     |

|                Aurora                |               Frost                |               Blade                |
| :----------------------------------: | :--------------------------------: | :--------------------------------: |
| ![Aurora](/sitedemos/auroraanim.gif) | ![Frost](/sitedemos/frostanim.gif) | ![Blade](/sitedemos/bladeanim.gif) |
|      `DYVIX_MODAL_THEME.AURORA`      |     `DYVIX_MODAL_THEME.FROST`      |     `DYVIX_MODAL_THEME.BLADE`      |
