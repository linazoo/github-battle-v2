import * as React from "react";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
    });
  }
  render() {
    const languages = ["All", "Ruby", "CSS", "Python", "Java", "Javascript"];

    return (
      <main>
        <select
          onChange={(e) => this.updateLanguage(e.target.value)}
          selected={this.state.selectedLanguage}
        >
          {languages.map((language) => (
            <option value={language} key={language}>
              {language}
            </option>
          ))}
        </select>
        {JSON.stringify(this.state, null, 2)}
      </main>
    );
  }
}
