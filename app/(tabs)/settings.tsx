import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Settings as SettingsIcon, Bell, Shield, Lock } from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SettingsIcon size={32} color="#0891b2" />
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.setting}>
          <View style={styles.settingInfo}>
            <Bell size={20} color="#64748b" />
            <Text style={styles.settingText}>Push Notifications</Text>
          </View>
          <Switch value={true} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>
        <View style={styles.setting}>
          <View style={styles.settingInfo}>
            <Shield size={20} color="#64748b" />
            <Text style={styles.settingText}>Advanced Scanning</Text>
          </View>
          <Switch value={true} />
        </View>
        <View style={styles.setting}>
          <View style={styles.settingInfo}>
            <Lock size={20} color="#64748b" />
            <Text style={styles.settingText}>Biometric Lock</Text>
          </View>
          <Switch value={false} />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clear Scan History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#0f172a',
    marginLeft: 12,
  },
  section: {
    backgroundColor: '#ffffff',
    marginTop: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: '#64748b',
    marginBottom: 8,
    marginLeft: 4,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#0f172a',
  },
  button: {
    backgroundColor: '#fee2e2',
    marginHorizontal: 16,
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#991b1b',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});