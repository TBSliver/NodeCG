class NcgAssetFile extends Polymer.Element {
	static get is() {
		return 'ncg-asset-file';
	}

	static get properties() {
		return {
			deleting: {
				type: Boolean,
				observer: '_deletingChanged',
				value: false
			}
		};
	}

	_deletingChanged(newVal) {
		this.$.spinner.style.display = newVal ? 'block' : 'none';
		this.$.delete.style.display = newVal ? 'none' : 'flex';
	}

	_handleDeleteClick() {
		this.deleting = true;

		return new Promise((resolve, reject) => {
			fetch(this.file.url, {
				method: 'DELETE',
				credentials: 'include'
			}).then(response => {
				this.deleting = false;

				if (response.status === 410 || response.status === 200) {
					this.dispatchEvent(new CustomEvent('deleted', {bubbles: true, composed: true}));
					resolve();
				} else {
					this.dispatchEvent(new CustomEvent('deletion-failed', {bubbles: true, composed: true}));
					reject();
				}
			}).catch(reject);
		});
	}
}

customElements.define('ncg-asset-file', NcgAssetFile);
