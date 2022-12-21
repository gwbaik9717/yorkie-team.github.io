export const language = 'css';
export const content = `
* {
  margin: 0;
  padding: 0;
}

body {
  --light-gray: #f5f3f1;
  --gray: #c2bdba;
  --black: #332e2b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--black);
}

img {
  vertical-align: top;
}

.speech-bubbles {
  padding: 16px;
  border: 1px solid var(--gray);
  border-radius: 16px;
}

.speech-bubbles:before {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -6px;
  margin-top: -8px;
  width: 0;
  height: 0;
  content: '';
  border-top: 0px solid transparent;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 8px solid var(--gray);
}

.speech-bubbles:after {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -5px;
  margin-top: -6px;
  width: 0;
  height: 0;
  content: '';
  border-top: 0px solid transparent;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid white;
}

#peerList {
  display: inline-flex;
  border: 1px solid var(--gray);
  border-radius: 100px;
  white-space: nowrap;
}

.peer {
  position: relative;
  margin: 12px;
}

.profile-img {
  width: 52px;
  cursor: pointer;
}

.peer.me {
  order: -1;
}

.peer .name {
  font-weight: 900;
  white-space: nowrap;
}

.peer .speech-bubbles {
  display: none;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%);
}

.peer:hover .speech-bubbles {
  display: block;
}

.peer.more {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background: var(--light-gray);
  border-radius: 100%;
  font-weight: 900;
  font-size: 24px;
  cursor: pointer;
}

.peer-more-list {
  font-size: 16px;
}

.peer-more-list .peer {
  display: flex;
  align-items: center;
  margin: 0 0 12px 0;
}

.peer-more-list .peer:last-child {
  margin-bottom: 0;
}

.peer-more-list .profile-img {
  margin-right: 8px;
  width: 26px;
}
`;
