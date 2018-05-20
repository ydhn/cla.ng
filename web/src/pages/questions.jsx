import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Get from '../components/common/get';

import { withRouter } from 'react-router-dom';
import { WithoutHeaderLayout } from '../layouts/default';
import { UserConsumer } from '../components/users/context';
import { WhitePanel } from '../components/common/panels';
import { Logo, SpeechBubble } from '../components/common/assets';
import { mainTheme } from '../index';
import { BrandSpan } from '../components/common/widgets';
import { ButtonBase, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import { Divider } from 'material-ui';
import { QuestionTitle } from './question';


class QuestionIndex extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  };
  
  state = { questions: null };

  render() {
    const imageContentStyle = {
      width: '100%',
      height: '15rem',
      display: 'flex', 
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: '1rem 1rem 1.3rem',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      lineHeight: '1.4rem',
    };

    const buttonBaseStyle = {
      width: '100%',
      borderRadius: '0.7rem',
      marginTop: '-1rem',
    }

    const rightLabelStyle = {
      textAlign: 'right',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    }

    return (
      <UserConsumer>
        {user => (
          <WithoutHeaderLayout>
            <div style={{ padding: '0 1rem' }}>
              <div style={{ padding: '1rem 0.5rem 0.2rem' }}>
                <Logo fill={mainTheme.palette.primary.main} width="80px" height="30px" />
              </div>

              <Get url="/questions">
                {questions => (
                  <div>
                    <WhitePanel
                      fullWidth
                      backgroundImage="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=612621fd686897b4812287430c8be9db&auto=format&fit=crop&w=2104&q=80">
                      <ButtonBase component="div"
                        onClick={() => this.redirectTo(1)}
                        style={buttonBaseStyle}>
                        <div style={imageContentStyle}>
                          <div style={rightLabelStyle}>오늘</div>
                          <div>
                            올해의<br />
                            <BrandSpan>버킷 리스트</BrandSpan>는?
                          </div>
                        </div>
                      </ButtonBase>
                    </WhitePanel>

                    <WhitePanel fullWidth>
                      <div style={{ ...rightLabelStyle, marginRight: '1rem' }}>
                        지난 오늘
                      </div>
                      <List>
                        {questions?.map((q, i, arr) => (
                          <QuestionItem
                            question={q.title} responses={q.responses}
                            key={i} final={arr.length === i + 1}
                            onClick={() => this.redirectTo(q.id)}
                          />
                        ))}
                      </List>
                    </WhitePanel>
                  </div>
                )}
              </Get>
            </div>
          </WithoutHeaderLayout>
        )}
      </UserConsumer>
      
    );
  }

  redirectTo = (id) => this.props.history.push(`/questions/${id}`);
}

class QuestionItem extends Component {
  static propTypes = {
    question: PropTypes.any,
    responses: PropTypes.any,
    final: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    final: false,
    onClick: () => { },
  };

  render() {
    const { question, responses, final, onClick } = this.props;

    return (
      <div style={{ padding: "0 1rem" }}>
        <ListItem button onClick={onClick}>
          <div style={{ width: 'calc(100% - 40px)' }}>
            <ListItemText style={{ paddingRight: 0 }}
              primary={
                <QuestionTitle inline
                  normalStyle={{ color: 'black' }}
                  text={question} />
              }
            />
          </div>
          <ListItemIcon>
            <SpeechBubble>{responses}</SpeechBubble>
          </ListItemIcon>
        </ListItem>

        {final ? null :
          <div style={{ padding: "0 1rem" }}>
            <Divider />
          </div>
        }
      </div>
    );
  }
}

export default withRouter(QuestionIndex);