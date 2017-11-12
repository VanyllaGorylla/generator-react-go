import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, createPosts, deletePost, updatePost } from './posts.actions';

const HelperBtn = ({ children, onClick, className }) => (
	<span className={className} onClick={onClick}>{children}</span>
);

const PostListItem = ({ post, onDelete, onSelect }) => (
	<li className="collection-item">
		{post.title}
		<div className="right">
			<HelperBtn
				onClick={onDelete}
				className="right">
				<i className="material-icons" data-id={post.id}>delete</i>
			</HelperBtn>
			<HelperBtn
				onClick={onSelect}
				className="right">
				<i className="material-icons" data-id={post.id}>edit</i>
			</HelperBtn>
		</div>
	</li>
);

class PostsCmp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
			postId: -1,
			updateMode: false
		};

		this.onChange = this.onChange.bind(this);
		this.onCreateButtonClick = this.onCreateButtonClick.bind(this);
		this.onDeletePostClick = this.onDeletePostClick.bind(this);
		this.onSelectPostClick = this.onSelectPostClick.bind(this);
		this.onResetClick = this.onResetClick.bind(this);
	}

	componentDidMount() {
		this.props.getPosts();
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onDeletePostClick(e) {
		e.preventDefault();
		this.props.deletePost(parseInt(e.target.getAttribute('data-id')));
	}

	onCreateButtonClick(e) {
		e.preventDefault();
		if (!this.state.updateMode) {
			this.props.createPosts({
				content: this.state.content,
				title: this.state.title
			});
		} else {
			this.props.updatePost({
				content: this.state.content,
				title: this.state.title,
				id: this.state.postId
			});
		}

		this.reset.call(this);
	}

	onSelectPostClick(e) {
		let postId, post;
		e.preventDefault();
		postId = parseInt(e.target.getAttribute('data-id'));
		post = this.props.posts.find(p => p.id === postId);
		this.setState({
			title: post.title,
			content: post.content,
			updateMode: true,
			postId: post.id
		});
	}

	onResetClick(e) {
		e.preventDefault();
		this.reset.call(this);
	}

	reset() {
		this.setState({
			content: '',
			title: '',
			postId: -1,
			updateMode: false
		});
	}

	render() {
		let formLabel = this.state.updateMode ? 'Update post' : 'Create new post';
		let posts = this.props.posts.map(p => (
			<PostListItem
				key={p.id}
				post={p}
				onDelete={this.onDeletePostClick}
				onSelect={this.onSelectPostClick} />));

		return (
			<div>
				<h3>Posts</h3>
				<div className="row">
					<div className="col s6">
						<ul className="collection">
							{posts}
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col s6">
						<h4>{formLabel}</h4>
						<input
							type="hidden"
							value={this.state.postId}
							name="postId"
							onChange={this.onChange}
						/>
						<input
							type="text"
							placeholder="Put title here"
							value={this.state.title}
							name="title"
							onChange={this.onChange}
						/>
						<textarea
							className="materialize-textarea"
							value={this.state.content}
							placeholder="Put content here"
							name="content"
							onChange={this.onChange}
						/>
						<button
							onClick={this.onResetClick}
							className="btn">Reset</button>
						<button
							onClick={this.onCreateButtonClick}
							className="btn right">Submit</button>

					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
	getPosts: () => dispatch(getPosts()),
	createPosts: post => dispatch(createPosts(post)),
	deletePost: id => dispatch(deletePost(id)),
	updatePost: post => dispatch(updatePost(post))
});

export { PostsCmp };
export default connect(mapStateToProps, mapDispatchToProps)(PostsCmp);
