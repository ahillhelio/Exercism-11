//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  message = message.trim();

  if (forcefulQuestion(message)) {
    return 'Calm down, I know what I\'m doing!';
  }

  else if (askedQuestion(message)) {
    return "Sure.";
  }

  else if (yelledAt(message)) {
    return "Whoa, chill out!";
  }
 
  else if (silentTreatment(message)) {
    return "Fine. Be that way!";
  }

  else {
    return "Whatever."
  }
};

function askedQuestion(message) {
  return message.endsWith('?');
}

function yelledAt(message) {
  return (message.match(/[A-Za-z]+/) && message == message.toUpperCase());
  
}

function silentTreatment(message) {
  return (message.length == 0);
}

function forcefulQuestion(message) {
  return (message.match(/[A-Za-z]+/) && message == message.toUpperCase() && message.endsWith('?') )
}

