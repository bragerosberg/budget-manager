import React, { useState } from 'react';
import './settings.css';

const Settings = (props) => {
  const [settingsOpened, setSettingsOpen] = useState(false);
  
  const handleSettingClick = () => setSettingsOpen(!settingsOpened);

  return settingsOpened ? (
    <main>
      <section className="settings__options">
        <div className="settings__options--entry">
          <label>Set budget manually</label>
          <input type="checkbox" id="myCheck" className="settings__checkbox" onClick={props.changeSplitMethod}/>
        </div>
        <div className="settings__options--entry">
          <label>Add a buffermonth ("13th-month")</label>
          <input type="checkbox" id="myCheck" className="settings__checkbox" onClick={props.changeBufferMonthState}/>
        </div>
      </section>
      <button className="settings__button" onClick={handleSettingClick}/>
    </main>
  ) : (
    <button className="settings__button" onClick={handleSettingClick}/>
  )
}

export default Settings;