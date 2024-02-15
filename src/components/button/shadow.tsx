import { Component, h, type JSX } from '@stencil/core';

@Component({
	tag: 'demo-button',
	shadow: true,
})
export class DemoButton {
	public render(): JSX.Element {
		return <demo-button-wc></demo-button-wc>;
	}
}
