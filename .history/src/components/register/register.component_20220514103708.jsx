import React from 'react';
import { useEffect, useState } from 'react';

export default function Register() {



    return (
        <div>
            <SettingSection className="register-form">
              <SettingRow label={this.formatMessage('selectMapWidget')}>
              </SettingRow>
              <SettingRow>
                  <MapWidgetSelector onSelect={this.onMapWidgetSelected} useMapWidgetIds={this.props.useMapWidgetIds} />
              </SettingRow>
              <SettingRow label={this.formatMessage('serviceURL')} flow='wrap'>
                <TextInput value={config.serviceURL} onChange={this.serviceURLChanged}></TextInput>
              </SettingRow>
            </SettingSection>
        </div>
    );
}