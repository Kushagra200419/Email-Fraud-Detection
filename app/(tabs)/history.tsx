import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Shield, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle2 } from 'lucide-react-native';

const HISTORY_DATA = [
  {
    id: '1',
    date: '2025-03-15 14:30',
    excerpt: 'URGENT: Your account needs immediate verification...',
    threats: ['Urgency manipulation', 'Potential phishing attempt'],
  },
  {
    id: '2',
    date: '2025-03-15 12:15',
    excerpt: 'Meeting reminder for tomorrow at 2 PM...',
    threats: [],
  },
  {
    id: '3',
    date: '2025-03-14 16:45',
    excerpt: 'Congratulations! You\'ve won $1,000,000...',
    threats: ['Possible scam content'],
  },
];

export default function HistoryScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <View style={styles.itemHeader}>
        {item.threats.length > 0 ? (
          <AlertTriangle size={20} color="#dc2626" />
        ) : (
          <CheckCircle2 size={20} color="#16a34a" />
        )}
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.excerpt} numberOfLines={2}>
        {item.excerpt}
      </Text>
      {item.threats.length > 0 && (
        <View style={styles.threatsContainer}>
          {item.threats.map((threat, index) => (
            <Text key={index} style={styles.threatTag}>
              {threat}
            </Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Shield size={32} color="#0891b2" />
        <Text style={styles.title}>Scan History</Text>
      </View>
      <FlatList
        data={HISTORY_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
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
  list: {
    padding: 16,
    gap: 12,
  },
  historyItem: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  date: {
    marginLeft: 8,
    color: '#64748b',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
  excerpt: {
    color: '#0f172a',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    marginBottom: 12,
  },
  threatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  threatTag: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});