pipeline{
	agent any
		stages
		{
			stage('checkout') {
				steps {
					checkout scm
				}
			}
			stage('tests') {
				steps {
					bat 'start /wait cmd.exe /k run.bat'
					bat 'start cmd.exe /k run1.bat'
				}
			}
		}
}