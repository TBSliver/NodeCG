class NcgMediaList extends Polymer.Element {
	static get is() {
		return 'ncg-media-list';
	}

	static get properties() {
		return {
			attrForSelected: {
				type: String,
				value: null
			},
			fallbackSelection: {
				type: String,
				value: null
			},
			selectable: {
				type: String
			}
		};
	}
}

customElements.define('ncg-media-list', NcgMediaList);
