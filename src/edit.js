/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: {
			rpr_recipe_calorific_value,
			rpr_recipe_fat,
			rpr_recipe_carbohydrate
		},
		setAttributes,
	} = props

	console.log(props.attributes)

	return (
		<div { ...useBlockProps() }>

			<InspectorControls key="setting">
				<div id="rpr-nutrition__controls">
					<fieldset>
						<TextControl
							label="Energy"
							value={ rpr_recipe_calorific_value }
							type="number"
							onChange={ ( value ) => setAttributes( { rpr_recipe_calorific_value: value } ) }
						/>
					</fieldset>
					<fieldset>
						<TextControl
							label="Fat"
							value= { rpr_recipe_fat }
							type="number"
							onChange={ ( value ) => setAttributes( { rpr_recipe_fat: value } ) }
						/>
					</fieldset>
					<fieldset>
						<TextControl
							label="Carbs"
							value= { rpr_recipe_carbohydrate }
							type="number"
							onChange={ ( value ) => setAttributes( { rpr_recipe_carbohydrate: value } ) }
						/>
					</fieldset>
				</div>
			</InspectorControls>

			<ul>
				<li>Energy: { rpr_recipe_calorific_value }</li>
				<li>Fat: { rpr_recipe_fat }</li>
				<li>Carbohydrates: { rpr_recipe_carbohydrate }</li>
			</ul>

		</div>
	)
}
