import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Shield, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle2 } from 'lucide-react-native';

export default function ScanScreen() {
  const [email, setEmail] = useState('');
  const [scanResult, setScanResult] = useState<null | {
    isSafe: boolean;
    threats: string[];
  }>(null);

  const analyzeEmail = () => {
    // Simple fraud detection logic (expand this in production)
    const threats = [];
    const lowercaseEmail = email.toLowerCase();
    
    if (lowercaseEmail.includes('urgent') || lowercaseEmail.includes('immediate action')) {
      threats.push('Urgency manipulation detected');
    }
    if (lowercaseEmail.includes('bank') && lowercaseEmail.includes('verify')) {
      threats.push('Potential phishing attempt');
    }
    if (lowercaseEmail.includes('winner') || lowercaseEmail.includes('prize')) {
      threats.push('Possible scam content');
    }
    if (lowercaseEmail.includes('password') || lowercaseEmail.includes('login')) {
      threats.push('Credential harvesting attempt');
    }

    setScanResult({
      isSafe: threats.length === 0,
      threats,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Shield size={48} color="#0891b2" />
        <Text style={styles.title}>Email Fraud Scanner</Text>
        <Text style={styles.subtitle}>
          Paste the suspicious email content below to analyze it for potential threats
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={8}
          placeholder="Paste email content here..."
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={[styles.button, !email && styles.buttonDisabled]}
          onPress={analyzeEmail}
          disabled={!email}>
          <Text style={styles.buttonText}>Analyze Email</Text>
        </TouchableOpacity>
      </View>

      {scanResult && (
        <View style={styles.resultContainer}>
          <View style={styles.resultHeader}>
            {scanResult.isSafe ? (
              <>
                <CheckCircle2 size={24} color="#16a34a" />
                <Text style={[styles.resultTitle, styles.safe]}>Email Appears Safe</Text>
              </>
            ) : (
              <>
                <AlertTriangle size={24} color="#dc2626" />
                <Text style={[styles.resultTitle, styles.unsafe]}>Threats Detected</Text>
              </>
            )}
          </View>

          {!scanResult.isSafe && (
            <View style={styles.threatsList}>
              {scanResult.threats.map((threat, index) => (
                <View key={index} style={styles.threatItem}>
                  <AlertTriangle size={16} color="#dc2626" />
                  <Text style={styles.threatText}>{threat}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
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
    marginTop: 16,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#64748b',
    textAlign: 'center',
    marginTop: 8,
  },
  inputContainer: {
    padding: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    minHeight: 160,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#0891b2',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#94a3b8',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  resultContainer: {
    margin: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    marginLeft: 8,
  },
  safe: {
    color: '#16a34a',
  },
  unsafe: {
    color: '#dc2626',
  },
  threatsList: {
    gap: 12,
  },
  threatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fee2e2',
    padding: 12,
    borderRadius: 8,
  },
  threatText: {
    marginLeft: 8,
    color: '#991b1b',
    fontFamily: 'Inter_400Regular',
    flex: 1,
  },
});