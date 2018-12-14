import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import ProfileCard from '../components/ProfileCard';

const styles = theme => ({
  post: {
    marginBottom: theme.spacing.unit * 2,
  }
});

const PageHome = ({ classes }) => (
  <Layout
    aside={
      <ProfileCard
        displayName="Paul Nta"
        username="paulnta"
        avatarUrl="https://source.unsplash.com/collection/895539"
        profileUrl="/profile/paulnta"
        coverUrl="https://source.unsplash.com/collection/841904"
        stats={{
          posts: 112,
          followers: 234,
          following: 22,
        }}
      />
    }
  >
    <PostCard
      className={classes.post}
      title="Spicy Carrot Salad"
      subtitle="@Anna posted 1 hour ago"
      imageUrl="https://source.unsplash.com/L1ZhjK-R6uc/1600x900"
      avatarUrl="https://source.unsplash.com/b1Hg7QI-zcc/150x150"
      body="Because this salad is so simple, fresh, top-quality tomatoes and mozzarella are important"
    />
    <PostCard
      className={classes.post}
      title="Burrata Black Bean Burgers"
      subtitle="@Sandra posted 3 days ago"
      imageUrl="https://source.unsplash.com/sWq83ZbZb6U/1600x900"
      avatarUrl="https://source.unsplash.com/EGVccebWodM/150x150"
      body="These vegetarian burgers are delicious! Your carnivorous friends will be impressed. My favorite way to serve is on a whole-wheat bun with garlic-lemon mayonnaise, fresh raw spinach, sliced tomato, and caramelized onions!"
    />
    <PostCard
      className={classes.post}
      title="Vegan Shepherd's Pie"
      subtitle="@Janne posted 1 week ago"
      imageUrl="https://source.unsplash.com/l_DY1GYtjTo/1600x900"
      avatarUrl="https://source.unsplash.com/yl2rJVuNWFQ/150x150"
      body="Looks yummy, but not very healthy at all. I'll try leaving out the vegan mayo and cream cheese. I think I might try it with soaked, chopped walnuts and quinoa rather than the soy meat substitute. Otherwise, this looks like something that might be really nice to serve when omnivores are visiting :)"
    />
    <PostCard
      className={classes.post}
      title="Rice cake eggs"
      subtitle="@James posted 2 weeks ago"
      imageUrl="https://source.unsplash.com/kZeUekYF9Jw/1600x900"
      avatarUrl="https://source.unsplash.com/d2MSDujJl2g/150x150"
      body="When you've got the whole gang along for the camping trip, make breakfast eggs the easy way and enjoy a slow sip of your coffee while they cook! Simply pour whole eggs or scrambled eggs into a greased muffin tin and set on a grate over your fire or cook on your hot grill. "
    />
  </Layout>
);

PageHome.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(PageHome);
