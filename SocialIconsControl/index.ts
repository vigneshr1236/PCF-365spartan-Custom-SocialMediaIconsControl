import { IInputs, IOutputs } from "./generated/ManifestTypes";

import MetadataStaticContent from "./metadata"

export class SocialIconsControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _context: ComponentFramework.Context<IInputs>;
	private _notifyOutputChanged: () => void;
	private _container: HTMLDivElement;
	private _metadataStaticContent: MetadataStaticContent;

	private _props: any;
	
	private _divBody: HTMLDivElement;
	private _anchorTag: HTMLAnchorElement;
	private _iconTag: HTMLSpanElement;

	private _ulElement: HTMLSpanElement;
	private _liElement: HTMLSpanElement;

	private _spanText: HTMLSpanElement;

	/**
	 * Empty constructor.
	 */
	constructor() {

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='starndard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		// Add control initialization code
		this._context = context;
		this._notifyOutputChanged = notifyOutputChanged;
		this._metadataStaticContent = new MetadataStaticContent();

		this._props = {};
		this._container = document.createElement("div");

		//appending the _container to the main container
		container.appendChild(this._container);
	}

	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void {
		// Add code to update control view
		this._context = context;
		this.createOrUpdateIcons();
	}

	createOrUpdateIcons() {
		this._container.innerHTML = "";
        //default-social-bar , circular-social-bar , button-social-bar , hower-social-bar , animatedbutton-social-bar ,glow-social-bar
		this._props.socialMediaTypeFormatProperty = this._context.parameters.socialMediaTypeProperty ? this._context.parameters.socialMediaTypeProperty.raw.toString().trim() : this._metadataStaticContent.defaultSocialbar ;
		if (!this._props.socialMediaTypeFormatProperty) return;
		this._props.facebookProperty = this._context.parameters.facebookProperty && this._context.parameters.facebookProperty.raw ? this._context.parameters.facebookProperty.raw.toString().trim() : null;
		this._props.twitterProperty = this._context.parameters.twitterProperty && this._context.parameters.twitterProperty.raw ? this._context.parameters.twitterProperty.raw.toString().trim() : null;
		this._props.googleProperty = this._context.parameters.googleProperty && this._context.parameters.googleProperty.raw ? this._context.parameters.googleProperty.raw.toString().trim() : null;
		this._props.linkedinProperty = this._context.parameters.linkedinProperty && this._context.parameters.linkedinProperty.raw ? this._context.parameters.linkedinProperty.raw.toString().trim() : null;
		this._props.youtubeProperty = this._context.parameters.youtubeProperty && this._context.parameters.youtubeProperty.raw ? this._context.parameters.youtubeProperty.raw.toString().trim() : null;
		this._props.pinterestProperty = this._context.parameters.pinterestProperty && this._context.parameters.pinterestProperty.raw ? this._context.parameters.pinterestProperty.raw.toString().trim() : null;
		this._props.skypeProperty = this._context.parameters.skypeProperty && this._context.parameters.skypeProperty.raw ? this._context.parameters.skypeProperty.raw.toString().trim() : null;
		this._props.androidProperty = this._context.parameters.androidProperty && this._context.parameters.androidProperty.raw ? this._context.parameters.androidProperty.raw.toString().trim() : null;
		this._props.dribbbleProperty = this._context.parameters.dribbbleProperty && this._context.parameters.dribbbleProperty.raw ? this._context.parameters.dribbbleProperty.raw.toString().trim() : null;
		this._props.vimeoProperty = this._context.parameters.vimeoProperty && this._context.parameters.vimeoProperty.raw ? this._context.parameters.vimeoProperty.raw.toString().trim() : null;
		this._props.tumblrProperty = this._context.parameters.tumblrProperty && this._context.parameters.tumblrProperty.raw ? this._context.parameters.tumblrProperty.raw.toString().trim() : null;
		this._props.vineProperty = this._context.parameters.vineProperty && this._context.parameters.vineProperty.raw ? this._context.parameters.vineProperty.raw.toString().trim() : null;
		this._props.foursquareProperty = this._context.parameters.foursquareProperty && this._context.parameters.foursquareProperty.raw ? this._context.parameters.foursquareProperty.raw.toString().trim() : null;
		this._props.stumbleuponProperty = this._context.parameters.stumbleuponProperty && this._context.parameters.stumbleuponProperty.raw ? this._context.parameters.stumbleuponProperty.raw.toString().trim() : null;
		this._props.flickrProperty = this._context.parameters.flickrProperty && this._context.parameters.flickrProperty.raw ? this._context.parameters.flickrProperty.raw.toString().trim() : null;
		this._props.yahooProperty = this._context.parameters.yahooProperty && this._context.parameters.yahooProperty.raw ? this._context.parameters.yahooProperty.raw.toString().trim() : null;
		this._props.redditProperty = this._context.parameters.redditProperty && this._context.parameters.redditProperty.raw ? this._context.parameters.redditProperty.raw.toString().trim() : null;
		this._props.rssProperty = this._context.parameters.rssProperty && this._context.parameters.rssProperty.raw ? this._context.parameters.rssProperty.raw.toString().trim() : null;

		this.onLoad();
	}

	onLoad() {
		let thisRef = this;
		this._divBody = document.createElement("div");
		this._divBody.className = this._props.socialMediaTypeFormatProperty == this._metadataStaticContent.defaultSocialbar ? this._metadataStaticContent.circularSocialBar : this._props.socialMediaTypeFormatProperty;

		this._ulElement = document.createElement("ul");

		if (this._props.socialMediaTypeFormatProperty == this._metadataStaticContent.glowSocialBar) {
			this._ulElement.className = this._metadataStaticContent.glowSocialBar_SocialIcons;
		}

		var iClassName: string = "";
		var anchorClassName: string = "";
		var spanTextClassName: string = "";
		switch (this._props.socialMediaTypeFormatProperty) {
			case this._metadataStaticContent.circularSocialBar:
				iClassName = this._metadataStaticContent.circularSocialBar_IClassName;
				break;
			case this._metadataStaticContent.buttonSocialBar:
				iClassName = this._metadataStaticContent.buttonSocialBar_IClassName;
				anchorClassName = this._metadataStaticContent.buttonSocialBar_AnchorClassName;
				spanTextClassName = this._metadataStaticContent.buttonSocialBar_SpanTextClassName;
				break;
			case this._metadataStaticContent.howerSocialBar:
				anchorClassName = this._metadataStaticContent.howerSocialBar_AnchorClassName;
				spanTextClassName = this._metadataStaticContent.howerSocialBar_SpanTextClassName;
				break;
			case this._metadataStaticContent.animatedbuttonSocialBar:
				iClassName = this._metadataStaticContent.animatedbuttonSocialBar_IClassName;
				spanTextClassName = this._metadataStaticContent.animatedbuttonSocialBar_SpanTextClassName;
				break;
			case this._metadataStaticContent.glowSocialBar:
				iClassName = this._metadataStaticContent.glowSocialBar_IClassName;
				spanTextClassName = this._metadataStaticContent.glowSocialBar_spanTextClassName;
				break;
			default:
				iClassName = this._metadataStaticContent.defaultSocialbar_IClassName;
				break;
		}

		Object.keys(this._props).map(function (keyName) {

			if (keyName != thisRef._metadataStaticContent.socialMediaTypeFormatProperty && thisRef._props[keyName] != null) {
				let _propertyName = thisRef.propertyName(keyName);

				thisRef._anchorTag = document.createElement("a");
				thisRef._anchorTag.href = thisRef._props[keyName];
				thisRef._anchorTag.className = anchorClassName + _propertyName;
				thisRef._anchorTag.id = thisRef._metadataStaticContent.anchorTag_id + _propertyName;
				thisRef._anchorTag.target = thisRef._metadataStaticContent.anchorTag_target;

				if (thisRef._props.socialMediaTypeFormatProperty != thisRef._metadataStaticContent.howerSocialBar) {
					thisRef._iconTag = document.createElement("i");
					thisRef._iconTag.className = iClassName + _propertyName;
					thisRef._anchorTag.appendChild(thisRef._iconTag);
				}

				if (thisRef._props.socialMediaTypeFormatProperty == thisRef._metadataStaticContent.buttonSocialBar || thisRef._props.socialMediaTypeFormatProperty == thisRef._metadataStaticContent.howerSocialBar || thisRef._props.socialMediaTypeFormatProperty == thisRef._metadataStaticContent.animatedbuttonSocialBar) {
					thisRef._spanText = document.createElement("span");
					thisRef._spanText.className = spanTextClassName;
					thisRef._spanText.innerHTML = _propertyName;
					thisRef._anchorTag.appendChild(thisRef._spanText);
				}

				if (thisRef._props.socialMediaTypeFormatProperty == thisRef._metadataStaticContent.animatedbuttonSocialBar || thisRef._props.socialMediaTypeFormatProperty == thisRef._metadataStaticContent.glowSocialBar) {
					thisRef._anchorTag.className = "";
					thisRef._liElement = document.createElement("li");
					if (thisRef._props.socialMediaTypeFormatProperty == thisRef._metadataStaticContent.glowSocialBar) {
						thisRef._liElement.className = _propertyName;
						var textnode = document.createTextNode(_propertyName);
						thisRef._anchorTag.appendChild(textnode);
					}
					thisRef._liElement.appendChild(thisRef._anchorTag);
					thisRef._ulElement.appendChild(thisRef._liElement);
				} else {
					thisRef._divBody.appendChild(thisRef._anchorTag);
				}
			};
		});

		if (this._props.socialMediaTypeFormatProperty == thisRef._metadataStaticContent.animatedbuttonSocialBar || this._props.socialMediaTypeFormatProperty == thisRef._metadataStaticContent.glowSocialBar) {
			this._divBody.appendChild(this._ulElement);
		}

		this._container.appendChild(this._divBody);
	}

	propertyName(property: string): string {
		return property.replace(this._metadataStaticContent.property, "");
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs {
		return {
		};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void {
		// Add code to cleanup control if necessary
	}
}