return (
  <div key={comment.id} className="comment">
    <div className="comment-image-container">
      <img src="/user-icon.png" />
    </div>
    <div className="comment-right-part">
      <div className="comment-content">
        <div className="comment-author">{comment.username}</div>
        <div>{createdAt}</div>
      </div>
      {!isEditing && <div className="comment-text">{comment.body}</div>}

      <div className="comment-actions">
        {canEdit && (
          <div
            className="comment-action"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "editing" })
            }
          >
            Edit
          </div>
        )}
        {canDelete && (
          <div
            className="comment-action"
            onClick={() => deleteComment(comment.id)}
          >
            Delete
          </div>
        )}
      </div>
    </div>
  </div>
);

{
  isEditing && (
    <CommentForm
      submitLabel="Update"
      hasCancelButton
      initialText={comment.body}
      handleSubmit={(text) => updateComment(text, comment.id)}
      handleCancel={() => {
        setActiveComment(null);
      }}
    />
  );
}

const deleteComment = (comment_id) => {
  if (window.confirm("Are you sure you want to remove comment?")) {
    deleteComment().then(() => {
      const updatedComments = sortComments.filter(
        (sortComments) => comment.comment_id !== comment_id
      );
      setSortComments(updatedComments);
    });
  }
};


<div className="comment-actions">
{
  <div
    className="comment-action"
    onClick={() =>
      setActiveComment({ id: comment_id, type: "editing" })
    }
  >
    Edit
  </div>
}
{canDelete && (
  <div
    className="comment-action"
    onClick={() => deleteComment(comment_id)}
  >
    Delete
  </div>
)}
</div>


.comment-actions {
    display: flex;
    font-size: 12px;
    color: rgb(51, 51, 51);
    cursor: pointer;
    margin-top: 8px;
  }
  
  .comment-action {
    margin-right: 8px;
  }
  
  .comment-action:hover {
    text-decoration: underline;
  }



.comment-form-title {
    font-size: 22px;
  }
  
  .comment-form-textarea {
    width: 100%;
    height: 80px;
    margin-bottom: 8px;
    margin-top: 8px;
    border: 1px solid rgb(107, 114, 12);
  }
  
  .comment-form-button {
    font-size: 16px;
    padding: 8px 16px;
    background: rgb(59, 130, 246);
    border-radius: 8px;
    color: white;
  }
  
  .comment-form-button:hover:enabled {
    cursor: pointer;
    background: rgb(37, 99, 235);
  }
  
  .comment-form-button:disabled {
    opacity: 0.7;
    cursor: default;
  }
  
  .comment-form-cancel-button {
    margin-left: 10px;
  }
  