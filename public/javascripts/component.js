function createInputComponent(label,type, validators) {
    
    const componentNode = document.createElement('div')

    const popupDivNode = componentNode.appendChild(document.createElement('div'))
    const popupDivSpanNode = popupDivNode.appendChild(document.createElement('span'))
    popupDivSpanNode.innerText = ''
    popupDivSpanNode.style.display = 'none'

    const inputLabelNode = componentNode.appendChild(document.createElement('label'))
    inputLabelNode.innerText = label

    const inputlNode = componentNode.appendChild(document.createElement('input'))
    inputlNode.type = type;
    

    return {
        component: componentNode,
        getValue: () => {
            return inputlNode.value
        },
        validate: () => {
            for (let i = 0; i < validators.length; i++) {
                const validator = validators[i];
                if (!validator.isValid(inputlNode.value)) {
                    popupDivSpanNode.style.display = 'block'
                    popupDivSpanNode.style.color = 'red'
                    popupDivSpanNode.innerText = validator.errorMessage
                    return false;
                }
            }
            popupDivSpanNode.style.display = 'none'
            return true;

        },
        hideValidationError: () => {
            popupDivSpanNode.style.display = 'none'
        },
        resetValue: () => {
            inputlNode.value = '';
        }
    }
}


function openEditModalBoxProduct() {

    const contentSection = document.getElementById('contentNode')

    const modalBoxNode = document.createElement('div');
    modalBoxNode.className = 'modal';
    modalBoxNode.id = 'modalBoxProduct'
    modalBoxNode.style.display = 'block';
    contentSection.appendChild(modalBoxNode)

    const modalContentNode = modalBoxNode.appendChild(document.createElement('div'))
    modalContentNode.className = 'modal-content'
    modalContentNode.id = 'modalContentProduct'

    const popupTitleNode = modalContentNode.appendChild(document.createElement('h3'))
    popupTitleNode.innerText = 'Authorization'

    const emailField = createInputComponent('Email:', 'text', [fieldValidator])
    modalContentNode.appendChild(emailField.component);

    const passwordField = createInputComponent('Password:', 'password', [fieldValidator])
    modalContentNode.appendChild(passwordField.component);

    const btnSubmit = document.createElement("button");
    btnSubmit.innerText = "Submit";
    btnSubmit.className = "modalBoxButton";
    btnSubmit.addEventListener('click', () => {
        const v1 = emailField.validate()
        const v2 = passwordField.validate()
        if (v1 && v2) {
            doLogin(emailField.getValue(), passwordField.getValue())
        }
    });
    modalContentNode.appendChild(btnSubmit);

    let btnExit = document.createElement("button");
    btnExit.innerText = "Exit";
    btnExit.className = "modalBoxButton"
    modalContentNode.appendChild(btnExit);
    btnExit.addEventListener('click', () => { window.location = '/'  });

}

const fieldValidator = {
    errorMessage: "Field mustn't be empty",
    isValid: (value) => value != null && value !== ''
}

function doLogin( email, password) {
    fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({login: email, password: password})
    })
    .then(resp => resp.json())
    .then(json => {
        console.log(json)
        document.cookie = `Authentication=${json.token}`
        document.location = '/'
    })
}