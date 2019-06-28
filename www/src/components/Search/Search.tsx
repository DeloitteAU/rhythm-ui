import React, {Component} from 'react';
import {Link} from 'gatsby';
import {Index} from 'elasticlunr';
import {css} from '@emotion/core';
import {ISearchProps, ISearchState} from './ISearch';
import {searchLabelStyle, searchBoxStyle} from './Search.css';

//TODO: Figure out how to give type to "this.index" from constructor.
export default class Search extends Component<ISearchProps, ISearchState> {
	public constructor(props) {
		super(props);
		this.state = {
			query: '',
			results: [],
		};
	}

	private _getIndex = () => (this.index ? this.index : Index.load(this.props.searchIndex)) // Create an elastic lunr index and hydrate with graphql query results

	private _handleSearch = (evt: React.ChangeEvent<HTMLInputElement>): void => {
		const query = evt.target.value;

		this.index = this._getIndex();

		this.setState({
			query, // Query the index with search string to get an [] of IDs
			results: this.index
				.search(query, {}) // Map over each ID and return the full document
				.map(({ref}) => this.index.documentStore.getDoc(ref)),
		});
	}

	public render() {
		return (
			<div>
				<label css={searchLabelStyle}>Search for components</label>
				<input type="text" value={this.state.query} onChange={this._handleSearch} />
				<div>
					<ul css={searchBoxStyle}>
						{this.state.results.map(page => (
							<li key={page.id}>
								<Link to={page.urlPath}>{page.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
