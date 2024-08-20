import { AnyNode } from 'domhandler';
import ElementList from '../elements';
import { messages } from '../messages';
import { Validator, ValidatorError } from './validator';

export class ImageValidator implements Validator {
  readonly #nodeTags = ['img'] as const;

  get nodeTags() {
    return this.#nodeTags;
  }

  validate(nodes: AnyNode[]): ValidatorError[] {
    const { elements: images, getElementAttributes } = new ElementList(nodes);

    return images
      .map((img) => {
        if (!('alt' in getElementAttributes(img))) {
          return new ValidatorError(messages.img.alt, img);
        }
      })
      .filter((error) => error instanceof ValidatorError);
  }
}
