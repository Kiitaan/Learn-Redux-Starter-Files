import React, { Component } from 'react';
import Photo from './Photo.js';
import Comments from './Comments.js';

class Single extends Component {
	render() {
		// index of the post
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		// get us the post
		const post = this.props.posts[i];
		console.log(post)
		return(
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments />
			</div>
		)
	}
}

export default Single;