import type { NextPage } from "next";
import styles from "./index.module.css";
import React, { useState } from 'react';
import TodoList from '../components/TodoList';

const Home: React.FC = () => {
  const [todoLists, setTodoLists] = useState<{ id: number; todos: { id: number; text: string }[] }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodoList = () => {
    if (inputValue.trim() !== '') {
      const newTodoList = {
        id: Date.now(),
        todos: [],
      };

      setTodoLists([...todoLists, newTodoList]);
      setInputValue('');
    }
  };

  const handleAddTodo = (listId: number) => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      const updatedTodoLists = todoLists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            todos: [...list.todos, newTodo],
          };
        }
        return list;
      });

      setTodoLists(updatedTodoLists);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a todo list name" />
        <button onClick={handleAddTodoList}>Add Todo List</button>
      </div>

      {todoLists.map((list) => (
        <div key={list.id}>
          <h2>{`Todo List ${list.id}`}</h2>
          <TodoList todos={list.todos} />

          <div>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a todo item" />
            <button onClick={() => handleAddTodo(list.id)}>Add Todo</button>
          </div>
        </div>
      ))}
    </div>
  );
};
const Assignment: NextPage = () => {
  return (
    <div className={styles.assignment}>
      <div className={styles.staticInfo}>
        <div className={styles.grid}>
          <div className={styles.frame}>
            <div className={styles.div}>
              <div className={styles.bg} />
              <div className={styles.colSize}>
                <div className={styles.oval} />
                <div className={styles.div1}>40</div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.bg} />
              <div className={styles.colSize}>
                <div className={styles.oval} />
                <div className={styles.div1}>40</div>
              </div>
            </div>
          </div>
          <div className={styles.frame1}>
            <div className={styles.div4}>
              <div className={styles.bg} />
              <div className={styles.colSize2}>
                <div className={styles.oval} />
                <div className={styles.div1}>64</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.bg} />
              <div className={styles.colSize2}>
                <div className={styles.oval} />
                <div className={styles.div1}>32</div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.bg} />
              <div className={styles.colSize2}>
                <div className={styles.oval} />
                <div className={styles.div1}>64</div>
              </div>
            </div>
          </div>
          <div className={styles.frame2}>
            <div className={styles.div10}>
              <div className={styles.bg} />
              <div className={styles.colSize5}>
                <div className={styles.oval} />
                <div className={styles.div1}>64</div>
              </div>
            </div>
            <div className={styles.div10}>
              <div className={styles.bg} />
              <div className={styles.colSize5}>
                <div className={styles.oval} />
                <div className={styles.div1}>64</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.news}>
          <div className={styles.background} />
          <img className={styles.imgIcon} alt="" src="/img@2x.png" />
          <div className={styles.content}>
            <div className={styles.text}>
              <div className={styles.assetDelistingsUpdContainer}>
                <p className={styles.assetDelistings}>Asset Delistings</p>
                <p className={styles.assetDelistings}>Update</p>
              </div>
              <div className={styles.theGrinBlockchain}>
                The Grin blockchain has presented significant technical
                challenges.
              </div>
              <b className={styles.november2020}>{`November 2020 `}</b>
            </div>
            <div className={styles.buttonnormal}>
              <div className={styles.rectangle} />
              <b className={styles.button}>Find out more</b>
            </div>
          </div>
          <img
            className={styles.buttoncircle24Icon}
            alt=""
            src="/buttoncircle24.svg"
          />
          <div className={styles.paginationstyle01}>
            <div className={styles.paginationactive}>
              <div className={styles.paginationactive1} />
            </div>
            <div className={styles.paginationdeactive}>
              <div className={styles.paginationdeactive1} />
            </div>
            <div className={styles.paginationdeactiveCopy}>
              <div className={styles.paginationdeactive1} />
            </div>
          </div>
        </div>
        <div className={styles.tabstyle02Couple}>
          <div className={styles.tabtabItemdeactiveCopy2}>
            <div className={styles.tabtabItemactive}>
              <div className={styles.buy}>Buy</div>
            </div>
          </div>
          <div className={styles.tabtabItemdeactiveCopy3}>
            <div className={styles.tabtabItemdeactive}>
              <div className={styles.sell}>Sell</div>
            </div>
          </div>
        </div>
        <div className={styles.buySellinput}>
          <div className={styles.groupContainer}>
            <div className={styles.rectangle} />
            <div className={styles.rectangleCopy} />
            <b className={styles.usdt}>USDT</b>
            <div className={styles.taglineInput}>
              <b className={styles.b}>18406,23589255</b>
              <div className={styles.limitPrice}>limit price</div>
            </div>
          </div>
        </div>
        <div className={styles.buySellinput2}>
          <div className={styles.groupContainer}>
            <div className={styles.rectangle2} />
            <b className={styles.usdt1}>USDT</b>
            <div className={styles.taglineInput1}>
              <b className={styles.b}>7795,51320083</b>
              <div className={styles.amount}>amount</div>
            </div>
          </div>
        </div>
        <div className={styles.frame3} />
        <div className={styles.closeIcon} />
        <div className={styles.sideMenu}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img className={styles.groupItem} alt="" src="/group-15952.svg" />
            <div className={styles.logo}>
              <div className={styles.buffer}>Name</div>
              <img className={styles.logoChild} alt="" src="/group-15783.svg" />
            </div>
            <img
              className={styles.closingIcon}
              alt=""
              src="/closing-icon.svg"
            />
            <div className={styles.groupParent}>
              <img
                className={styles.groupInner}
                alt=""
                src="/group-15803.svg"
              />
              <div className={styles.menuItem}>Section 6</div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.groupContainer}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-15792.svg"
                />
                <div className={styles.menuItem1}>Section 1</div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupChild1}
                alt=""
                src="/group-15798.svg"
              />
              <div className={styles.menuItem2}>Section 2</div>
            </div>
            <div className={styles.groupParent1}>
              <img
                className={styles.groupChild2}
                alt=""
                src="/group-15804.svg"
              />
              <div className={styles.menuItem3}>Section 7</div>
            </div>
            <div className={styles.groupParent2}>
              <img
                className={styles.groupChild3}
                alt=""
                src="/group-15802.svg"
              />
              <div className={styles.menuItem4}>{`Section `}</div>
            </div>
            <div className={styles.groupParent3}>
              <img
                className={styles.groupChild4}
                alt=""
                src="/group-15807.svg"
              />
              <div className={styles.menuItem5}>Referral</div>
            </div>
            <div className={styles.groupParent4}>
              <img
                className={styles.groupChild5}
                alt=""
                src="/group-15794.svg"
              />
              <div className={styles.menuItem6}>Section 3</div>
            </div>
            <div className={styles.documentationParent}>
              <div className={styles.documentation}>Documentation</div>
              <img className={styles.groupIcon1} alt="" src="/group.svg" />
            </div>
            <div className={styles.groupParent5}>
              <div className={styles.menuItemWrapper}>
                <div className={styles.menuItem7}>Home</div>
              </div>
              <img className={styles.categoryIcon} alt="" src="/category.svg" />
            </div>
            <div className={styles.groupParent6}>
              <div className={styles.menuItemContainer}>
                <div className={styles.menuItem7}>Section 4</div>
              </div>
              <img
                className={styles.groupChild6}
                alt=""
                src="/group-15873.svg"
              />
            </div>
            <div className={styles.buyButtonParent}>
              <button className={styles.buyButton}>
                <div className={styles.groupContainer}>
                  <div className={styles.buttonmedium}>
                    <div className={styles.textButtonwithLeftIcon} />
                    <div className={styles.buyIbfr}>Buy $iBFR</div>
                  </div>
                </div>
              </button>
              <textarea className={styles.balanceIbfr} placeholder="$0.90" />
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.banner}>
          <div className={styles.groupContainer}>
            <div className={styles.instanceChild} />
          </div>
          <div className={styles.officialIbfrContractContainer}>
            <p className={styles.assetDelistings}>
              Lorem Ipsum is simply dummy text of the printing
            </p>
          </div>
        </div>
        <div className={styles.navBar}>
          <div className={styles.active}>{`Active     `}</div>
          <div className={styles.history}>History</div>
          <div className={styles.sectionParent}>
            <div className={styles.section}>Section</div>
            <img className={styles.lineIcon} alt="" src="/line.svg" />
          </div>
        </div>
        <div className={styles.balance}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.groupContainer}>
                  <div className={styles.rectangle3} />
                </div>
              </div>
            </div>
            <textarea className={styles.groupTextarea} placeholder="Tier 1" />
            <div className={styles.ibfrWrapper}>
              <div className={styles.ibfr}>0.2 $XYZ</div>
            </div>
            <img className={styles.walletIcon} alt="" src="/wallet.svg" />
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.n}>N</div>
        </div>
        <div className={styles.ellipseGroup}>
          <div className={styles.frameItem} />
          <div className={styles.n1}>N</div>
        </div>
        <button className={styles.buttonmedium1}>
          <div className={styles.buyXyz}>Buy $XYZ</div>
          <div className={styles.textButtonwithLeftIcon1} />
        </button>
        <button className={styles.buttonmedium2}>
          <div className={styles.save}>{`Save `}</div>
          <div className={styles.textButtonwithLeftIcon2} />
        </button>
        <img
          className={styles.icon20closeCopy}
          alt=""
          src="/icon-20close-copy.svg"
        />
        <div className={styles.withdrawEth}>Edit Todo</div>
        <div className={styles.rectangle4} />
        <b className={styles.carrot}>Carrot</b>
        <div className={styles.rectangle5} />
        <div className={styles.carrotImprovesEyesight}>
          Carrot improves eyesight.
        </div>
      </div>
      <div className={styles.instanceParent}>
        <div className={styles.groupContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.selectedSideMenu1}>
                <div className={styles.menuItembackgroundactive} />
                <div className={styles.groupParent8}>
                  <img
                    className={styles.groupChild7}
                    alt=""
                    src="/group-157981.svg"
                  />
                  <div className={styles.menuItem9}>Prediction game</div>
                </div>
              </div>
            </div>
            <div className={styles.groupWrapper2}>
              <div className={styles.groupContainer}>
                <div className={styles.groupContainer}>
                  <div className={styles.iconlytwoTonenotificationParent}>
                    <img className={styles.iconlytwoTonenotification} alt="" />
                    <div className={styles.buy}> Section 8</div>
                  </div>
                </div>
                <img className={styles.groupIcon2} alt="" src="/group1.svg" />
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupIcon3} alt="" src="/group2.svg" />
      </div>
      <button className={styles.instanceGroup}>
        <div className={styles.groupContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.groupContainer}>
                <div className={styles.menuItembackgroundactive} />
                <div className={styles.groupParent8}>
                  <img
                    className={styles.groupChild7}
                    alt=""
                    src="/group-157981.svg"
                  />
                  <div className={styles.menuItem11}>Prediction game</div>
                </div>
              </div>
            </div>
            <div className={styles.groupWrapper3}>
              <div className={styles.groupContainer}>
                <div className={styles.groupContainer}>
                  <div className={styles.iconlytwoTonenotificationParent}>
                    <img className={styles.iconlytwoTonenotification} alt="" />
                    <div className={styles.menuItem12}>Section 8</div>
                  </div>
                </div>
                <img className={styles.groupIcon2} alt="" src="/group1.svg" />
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupIcon3} alt="" src="/group3.svg" />
      </button>
      <div className={styles.divider1} />
      <div className={styles.divider2} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameDiv}>
                <button className={styles.rectangleGroup}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle@2x.png"
                  />
                  <div className={styles.yourReferralLinkParent}>
                    <div className={styles.yourReferralLink}>
                      Bicycle makes commuting easier.
                    </div>
                    <b className={styles.inviteYourFriends}>Bicycle</b>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/group-15510.svg"
                    />
                  </div>
                </button>
                <textarea
                  className={styles.frameTextarea}
                  placeholder="List : Things to Buy"
                />
                <button className={styles.rectangleGroup}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle@2x.png"
                  />
                  <div className={styles.yourReferralLinkParent}>
                    <div className={styles.yourReferralLink}>
                      Bicycle makes commuting easier.
                    </div>
                    <b className={styles.inviteYourFriends1}>Bicycle</b>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/group-155101.svg"
                    />
                  </div>
                </button>
                <button className={styles.yourReferralLinkContainer}>
                  <div className={styles.yourReferralLink}>
                    Carrot Improves eyesight.
                  </div>
                  <b className={styles.inviteYourFriends1}>Carrot</b>
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/group-155102.svg"
                  />
                </button>
                <div className={styles.bgParent}>
                  <img className={styles.bgIcon} alt="" src="/bg.svg" />
                  <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
                  <div className={styles.yourReferralLink3}>
                    Add Todo Description
                  </div>
                  <div className={styles.inviteYourFriendsWrapper}>
                    <b className={styles.inviteYourFriends3}>Add Todo</b>
                  </div>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="/group-155103.svg"
                  />
                </div>
                <button className={styles.listThingsToBuyWrapper}>
                  <div className={styles.listThings}>List : Things to Buy</div>
                </button>
              </div>
              <img
                className={styles.frameChild4}
                alt=""
                src="/rectangle-3661.svg"
              />
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangle6} />
                <button className={styles.listThingsToBuyContainer}>
                  <div className={styles.listThings}>List : Things to Buy</div>
                </button>
                <div className={styles.yourReferralLinkParent1}>
                  <div className={styles.yourReferralLink4}>
                    Add Todo Description
                  </div>
                  <div className={styles.inviteYourFriendsContainer}>
                    <b className={styles.inviteYourFriends3}>Add Todo</b>
                  </div>
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="/group-155104.svg"
                  />
                </div>
                <button className={styles.listThingsToBuyContainer}>
                  <div className={styles.listThings}>
                    <p className={styles.assetDelistings}>List : Empty List</p>
                  </div>
                </button>
              </div>
              <img
                className={styles.frameChild6}
                alt=""
                src="/rectangle-36611.svg"
              />
            </div>
            <img className={styles.icon} alt="" src="/1.svg" />
            <img className={styles.icon1} alt="" src="/11.svg" />
            <img className={styles.frameChild7} alt="" src="/group-16097.svg" />
            <img className={styles.frameChild8} alt="" src="/group-16101.svg" />
          </div>
          <button className={styles.frameButton}>
            <div className={styles.addTodoListWrapper}>
              <div className={styles.addTodoList}>Add Todo-List</div>
            </div>
            <img className={styles.frameIcon} alt="" src="/frame-16091.svg" />
          </button>
        </div>
        <img className={styles.frameChild9} alt="" src="/rectangle-3662.svg" />
      </div>
    </div>
  );
};

export default Home;

