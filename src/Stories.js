import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardNav, KeyboardNavItem } from 'cerebro-ui';
import moment from 'moment';
import styles from './styles.css';
import commentsIcon from '../comments.png';
import starIcon from '../star.png';

const getFlex = (direction) => ({ display: 'flex', flexDirection: direction, width: '100%' });

const Stories = ({ stories, openUrl }) => (
  <div className={styles.wrapper}>
    <KeyboardNav>
      <ul className={styles.list}>
        {
          stories.map((story, index) => (
            <KeyboardNavItem
              key={story.objectID}
              tagName={'li'}
              onSelect={() => openUrl(story.url)}
              className={styles['list-item']}
            >
              <div style={getFlex('row')}>
                <div className={styles.count}>{index + 1}.</div>
                <div style={getFlex('column')}>
                  <div>{story.title}</div>
                  <div style={{ paddingTop: 5 }}>
                    <span className={styles.timeago}>
                      {moment.unix(story.created_at_i).fromNow()}
                    </span>
                    <span style={{ float: 'right' }}>
                      <span className={styles.chip}>
                        <img src={starIcon} alt="points" className={styles['chip-icon']} />{story.points || 0}
                      </span>
                      <span className={styles.chip}>
                        <img src={commentsIcon} alt="comments" className={styles['chip-icon']} />{story.num_comments || 0 }
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </KeyboardNavItem>
          ))
        }
      </ul>
    </KeyboardNav>
  </div>
);

Stories.propTypes = {
  stories: PropTypes.array.isRequired,
  openUrl: PropTypes.func.isRequired
};

module.exports = Stories;
