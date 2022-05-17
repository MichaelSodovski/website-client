import React from 'react';
import { useEffect, useState } from 'react';

export default function Register() {



    return (
        <div>
            <SettingSection className="register-form">
                <SettingRow >
                    <TextInput value=""></TextInput>
                </SettingRow>

                <TextInput value={config.serviceURL} onChange={this.serviceURLChanged}></TextInput>
                <SettingRow>
                    <TextInput value={config.serviceURL} onChange={this.serviceURLChanged}></TextInput>
                </SettingRow>
                <SettingRow label={this.formatMessage('serviceURL')} flow='wrap'>
                    <TextInput value={config.serviceURL} onChange={this.serviceURLChanged}></TextInput>
                </SettingRow>
            </SettingSection>
        </div >
    );
}