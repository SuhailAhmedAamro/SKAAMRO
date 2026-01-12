import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { cvData } from "@/lib/cv-data";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    borderBottom: "2 solid #2563eb",
    paddingBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: "#2563eb",
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 10,
    color: "#4b5563",
    marginBottom: 3,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 8,
    borderBottom: "1 solid #93c5fd",
    paddingBottom: 3,
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#374151",
    marginBottom: 8,
    textAlign: "justify",
  },
  educationItem: {
    marginBottom: 10,
  },
  educationDegree: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 2,
  },
  educationDetails: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 1,
  },
  skillsContainer: {
    marginBottom: 8,
  },
  skillCategory: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 3,
  },
  skillsList: {
    fontSize: 10,
    color: "#4b5563",
    marginBottom: 6,
    lineHeight: 1.4,
  },
  achievementItem: {
    fontSize: 10,
    color: "#374151",
    marginBottom: 4,
    paddingLeft: 10,
  },
  projectItem: {
    marginBottom: 8,
  },
  projectName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 2,
  },
  projectTech: {
    fontSize: 9,
    color: "#2563eb",
    fontStyle: "italic",
    marginBottom: 2,
  },
  projectDescription: {
    fontSize: 10,
    color: "#4b5563",
    lineHeight: 1.3,
  },
  languageText: {
    fontSize: 10,
    color: "#4b5563",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 8,
    color: "#9ca3af",
    textAlign: "center",
    borderTop: "1 solid #e5e7eb",
    paddingTop: 8,
  },
});

export default function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{cvData.personal.name}</Text>
          <Text style={styles.title}>{cvData.personal.title}</Text>
          <Text style={styles.contactInfo}>Email: {cvData.personal.email}</Text>
          <Text style={styles.contactInfo}>
            Phone: {cvData.personal.phone.join(" | ")}
          </Text>
          <Text style={styles.contactInfo}>
            Address: {cvData.personal.address}
          </Text>
          <Text style={styles.contactInfo}>
            Portfolio: {cvData.personal.portfolio}
          </Text>
        </View>

        {/* Profile Statement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFILE</Text>
          <Text style={styles.paragraph}>{cvData.profile}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillCategory}>Frontend Development:</Text>
            <Text style={styles.skillsList}>
              {cvData.skills.frontend.join(", ")}
            </Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillCategory}>Backend & Tools:</Text>
            <Text style={styles.skillsList}>
              {cvData.skills.backend.join(", ")}
            </Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillCategory}>Office & Professional:</Text>
            <Text style={styles.skillsList}>
              {cvData.skills.office.join(", ")}
            </Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillCategory}>Tools & Version Control:</Text>
            <Text style={styles.skillsList}>
              {cvData.skills.tools.join(", ")}
            </Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillCategory}>Soft Skills:</Text>
            <Text style={styles.skillsList}>{cvData.skills.soft.join(", ")}</Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.educationDegree}>{edu.degree}</Text>
              <Text style={styles.educationDetails}>
                {edu.institution} - {edu.year}
              </Text>
              <Text style={styles.educationDetails}>Grade: {edu.grade}</Text>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          {cvData.projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectTech}>{project.tech}</Text>
              <Text style={styles.projectDescription}>
                {project.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
          {cvData.achievements.map((achievement, index) => (
            <Text key={index} style={styles.achievementItem}>
              • {achievement}
            </Text>
          ))}
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LANGUAGES</Text>
          <Text style={styles.languageText}>
            {cvData.languages.join(" | ")}
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            Generated from {cvData.personal.portfolio} | Suhail Ahmed  CV
          </Text>
        </View>
      </Page>
    </Document>
  );
}
