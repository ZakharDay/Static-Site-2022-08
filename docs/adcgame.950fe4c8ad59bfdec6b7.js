/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/adcgame/model.js
var speed = 3000;
var stages = {
  stage1: [{
    questions: ['Ghbdtn! Rfr ltkf?', 'Ой', 'Привет! Как дела?', 'Ладно, знаешь меня?'],
    answers: [{
      text: 'Да',
      stage: 'stage3'
    }, {
      text: 'Нет',
      stage: 'stage2'
    }]
  }, {
    questions: ['Хей! приветствую тебя из глубин интернета', 'Ты ведь не знаешь кто я, верно?'],
    answers: [{
      text: 'Вообще-то знаю',
      stage: 'stage3'
    }, {
      text: 'Нет',
      stage: 'stage2'
    }]
  }, {
    questions: ['О, как хорошо, что ты заглянул', 'Кажется, мы уже встречались?', 'На вечеринке... Ну этого... того '],
    answers: [{
      text: 'Ну точно, было',
      stage: 'stage3'
    }, {
      text: 'Ты меня с кем-то путаешь',
      stage: 'stage2'
    }]
  }, {
    questions: ['ЙОУ', 'ДИП!', 'РЭП'],
    answers: [{
      text: 'ДИП!',
      stage: 'stage3'
    }, {
      text: 'ЭЭЭ, ЧТО?',
      stage: 'stage2'
    }]
  }],
  stage2: [{
    questions: ['Я Дипфейс', 'Маскот кафедры «Дизайн и программированеие», знаешь что такое?'],
    stage: 'stage4'
  }, {
    questions: ['Я чёрный круг с ромбом вместо глаза, неужели не видно?'],
    stage: 'stage4'
  }, {
    questions: ['Вообще, я не раскрываю своё происхождение, но тебе скажу ', 'Я был рождён в недрах Школы Дизайна, меня сотворили дизайнеры... или программисты... или... Я так и не понял, кто они', 'Я видел только миллион своих клонов, а потом всё потемнело. Очнулся уже здесь, на сайте.  Тут немного одиноко, поэтому давай поболтаем?'],
    stage: 'stage4'
  }, {
    questions: ['Я Дипфейс! Я создаю новую визуальную культуру!', 'Ой, кажется это не мои слова', 'Прости, в этом интернете в меня часто прилетают куски информации', 'На самом деле, я символ кафедры «Дизайн и программирование» и скоро здесь будет весело))', '))))+'],
    stage: 'stage4'
  }],
  stage3: [{
    questions: ['А ты, я гляжу, прошаренный! Задам тебе пару вопросов'],
    answers: [{
      text: 'Я сегодня не в настроении(',
      stage: 'stage5'
    }, {
      text: 'Ок',
      stage: 'stage4'
    }]
  }, {
    questions: ['Ого, ну ничего себе! Точно хочу узнать тебя поближе'],
    answers: [{
      text: 'Я сегодня не в настроении(',
      stage: 'stage5'
    }, {
      text: 'Ок',
      stage: 'stage4'
    }]
  }, {
    questions: ['Вау! Круто! Мама, я знаменитость'],
    answers: [{
      text: 'Я сегодня не в настроении(',
      stage: 'stage5'
    }, {
      text: 'Ок',
      stage: 'stage4'
    }]
  }],
  stage4: [{
    questions: ['Ну раз уж я рассказал кто я, поделишься кто ты?'],
    answers: [{
      text: 'Дизайнер',
      stage: 'stage1'
    }, {
      text: 'Прогер',
      stage: 'stage1'
    }, {
      text: '???',
      stage: 'stage1'
    }]
  }, {
    questions: ['А ты сам чем занимаешься?'],
    answers: [{
      text: 'Дизайнер',
      stage: 'stage1'
    }, {
      text: 'Прогер',
      stage: 'stage1'
    }, {
      text: '???',
      stage: 'stage1'
    }]
  }, {
    questions: ['Твоя очередь представиться'],
    answers: [{
      text: 'Дизайнер',
      stage: 'stage1'
    }, {
      text: 'Прогер',
      stage: 'stage1'
    }, {
      text: '???',
      stage: 'stage1'
    }]
  }],
  stage5: [{
    questions: ['Как знаешь', 'Ладно, я добрый, держи стикерпак за честность']
  }]
};

;// CONCATENATED MODULE: ./src/adcgame.js



function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function showTexting(wrapper) {
  var element = document.createElement('div');
  element.innerText = '...';
  element.classList.add('texting');
  wrapper.appendChild(element);
}

function removeTexting() {
  var texting = document.getElementsByClassName('texting')[0];
  texting.remove();
}

function showQuestions(stage) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('questionsWrapper');
  var stageContent = sample(stages[stage]);
  var timeout = speed;

  if (stageContent.questions.length === 1) {
    var question = stageContent.questions[0];
    showQuestion(wrapper, question);
    setTimeout(function () {
      showAnswersOrNextStage(stageContent);
    }, 1000);
  } else {
    stageContent.questions.forEach(function (question, i) {
      if (i == 0) {
        showQuestion(wrapper, question);
        showTexting(wrapper);
      } else {
        if (i + 1 == stageContent.questions.length) {
          setTimeout(function () {
            removeTexting();
            showQuestion(wrapper, question);
            showAnswersOrNextStage(stageContent);
          }, timeout);
        } else {
          setTimeout(function () {
            removeTexting();
            showQuestion(wrapper, question);
            showTexting(wrapper);
          }, timeout);
          timeout += speed;
        }
      }
    });
  }

  document.body.appendChild(wrapper);
}

function showQuestion(wrapper, question) {
  var element = document.createElement('div');
  element.innerText = question;
  element.classList.add('question');
  wrapper.appendChild(element);
}

function showAnswersOrNextStage(stageContent) {
  if (stageContent.answers) {
    showAnswers(stageContent.answers);
  } else {
    showQuestions(stageContent.stage);
  }
}

function showAnswers(answers) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('answersWrapper');
  answers.forEach(function (answer, i) {
    var element = document.createElement('div');
    element.innerText = answer.text;
    element.classList.add('answer');
    element.addEventListener('click', function () {
      showQuestions(answer.stage);
    });
    wrapper.appendChild(element);
  });
  document.body.appendChild(wrapper);
}

document.addEventListener('DOMContentLoaded', function () {
  showQuestions('stage1');
});
/******/ })()
;