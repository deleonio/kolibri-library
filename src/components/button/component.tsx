import { Component, h, type JSX } from '@stencil/core';

/**
 * @internal
 */
@Component({
	tag: 'demo-button-wc',
	shadow: false,
})
export class DemoButtonWc {
	public render(): JSX.Element {
		return <button>Click me!</button>;
	}
}
