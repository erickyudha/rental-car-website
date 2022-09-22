class DropdownInput extends Component {
  constructor(placeholderText, renderId, btnIcon, labelName, varName, optionValueObject, overlayId) {
    super(renderId)

    // optionValueObject > an object of [optionText => value] pair 
    this.optionValueObject = optionValueObject
    this.placeholderText = placeholderText
    this.varName = varName
    this.btnIcon = btnIcon // src link
    this.labelName = labelName
    this.overlayId = overlayId || null;
  }

  // REMEMBER TO USE form-component.css!!
  render() {
    const start = `
        <div class="select-input">
          <label>${this.labelName}</label>
          <button type="button" class="select-btn input-container">
            <span>${this.placeholderText}</span>
            <img src="${this.btnIcon}" alt="" height="18" width="18" />
          </button>
          <ul class="select-dropdown ${(this.varName === "pickupTime") ? "pickup-time-list" : ""}">
        `
    let middle = ''
    for (const optionText in this.optionValueObject) {
      if (Object.hasOwnProperty.call(this.optionValueObject, optionText)) {
        const value = this.optionValueObject[optionText];
        middle += `
                <li>
                    <input
                        type="radio"
                        name="${this.varName}"
                        id="${value}"
                        value="${value}"
                    />
                    <label for="${value}">${optionText}</label>
                    ${(this.varName === "pickupTime") ? "<span>WIB</span>" : ""}
                </li>
                `
      }
    }

    const end = `
          </ul>
        </div>
        `


    this.renderTarget.innerHTML = start + middle + end;
  }

  init() {
    const dropdown = document.querySelector(`#${this.renderId} .select-dropdown`)
    // DROPDOWN AUTO SIZE
    const changeDropdownWidth = () => {
      dropdown.style.width = this.renderTarget.offsetWidth + "px";
    }
    changeDropdownWidth();
    window.addEventListener("resize", changeDropdownWidth)

    // COLOR SETUP
    const PLACEHOLDER_COLOR = "#8A8A8A";
    const SELECTED_COLOR = "#000";

    const dropButton = document.querySelector(`#${this.renderId} .select-btn`);
    const dropButtonLabel = dropButton.children[0];

    dropButtonLabel.style.color = PLACEHOLDER_COLOR;
    dropButtonLabel.addEventListener('DOMSubtreeModified', () => {
      dropButtonLabel.style.color = SELECTED_COLOR;
    })

    // UNHIDE DROPDOWN WHEN FORM BUTTON CLICKED + TRIGGER FORM OVERLAY
    const formOverlay = document.getElementById(this.overlayId);
    const checkAndToggleOverlay = (checkCondition) => {
      if (checkCondition) {
        formOverlay.classList.add("active");
      } else {
        formOverlay.classList.remove("active")
      }
    }

    const img = dropButton.children[1];

    dropButton.addEventListener("click", () => {
      dropdown.classList.toggle("active");
      img.classList.toggle("active");
      checkAndToggleOverlay(dropdown.classList.contains("active"))
    })
    dropButton.addEventListener("focusout", () => {
      formOverlay.classList.remove("active");
      setTimeout(() => {
        dropdown.classList.remove("active");
        img.classList.remove("active");
      }, 120);
    })

    // DROPDOWN ITEM CLICK EVENT
    const list = dropdown.children
    for (let j = 0; j < list.length; j++) {
      const listItem = list[j];
      listItem.addEventListener("click", () => {
        const input = listItem.children[0]
        let text = listItem.children[1].innerHTML;
        if (input.name === "pickupTime") text += " WIB";
        dropButtonLabel.innerHTML = text;
        input.checked = true;

        dropButton.classList.remove("active");
        formOverlay.classList.remove("active");
      })
    }
  }
}