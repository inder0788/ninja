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
					bat 'start cmd.exe /k run.bat'
				}
			}
		}
}