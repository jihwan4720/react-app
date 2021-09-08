import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      console.log('Content render');
      return(
        <article>
          <h2>create</h2>
          <form action="/create_process" methos="post" onSubmit={ }>
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;
