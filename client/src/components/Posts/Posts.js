import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import Post from "./Post/Post";

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts)
    console.log("Fetching all posts from backend -> ", posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container className={classes.container} spacing={3} alignItems="stretch">
                {
                    posts.map(post => {
                        return (
                            <Grid item xs={12} sm={6}>
                                <Post post={post} />
                            </Grid>
                        );
                    })
                }
            </Grid>
        )

    )
};

export default Posts;
