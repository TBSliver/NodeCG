class NcgMedia extends Polymer.Element {
	static get is() {
		return 'ncg-media';
	}

	static get properties() {
		return {
			searchString: {
				type: String,
				observer: 'updateFilter',
				value: ''
			}
		};
	}

	updateFilter() {
		this.$.filesRepeat.render();
	}

	_filterFiles(preset) {
		return preset.name.toLowerCase().includes(this.searchString.toLowerCase());
	}

	_sortFiles(a, b) {
		// Sort alphabetically.
		if (a.name < b.name) {
			return -1;
		}

		if (a.name > b.name) {
			return 1;
		}

		return 0;
	}
}

customElements.define('ncg-media', NcgMedia);
