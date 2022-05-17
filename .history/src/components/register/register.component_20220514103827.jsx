import React from 'react';
import { useEffect, useState } from 'react';

export default function Register() {



    return (
        <div>
            <SettingSection className="register-form">
                <SettingRow >
                    <TextInput value=""></TextInput>
                </SettingRow>

                <TextInput value=""></TextInput>
                <SettingRow>
                    <TextInput value=""></TextInput>
                </SettingRow>
                <SettingRow  flow='wrap'>
                    <TextInput value=""></TextInput>
                </SettingRow>
            </SettingSection>
        </div >
    );
}