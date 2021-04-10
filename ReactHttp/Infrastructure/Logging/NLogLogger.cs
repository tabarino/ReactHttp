using System;
using Core.Logging;
using NLog;

namespace ReactHttp.Infrastructure.Logging
{
    public class NLogLogger<T> : INLogLogger<T>
    {
        private readonly Logger _nLogger;

        public NLogLogger()
        {
            _nLogger = LogManager.GetLogger(typeof(T).Name);
        }

        public void Log(EnumLogLevel logLevel, string message, Exception ex = null)
        {
            switch (logLevel)
            {
                case EnumLogLevel.Debug:
                    LogDebug(message);
                    break;
                case EnumLogLevel.Info:
                    LogInfo(message);
                    break;
                case EnumLogLevel.Warning:
                    LogWarning(message);
                    break;
                case EnumLogLevel.Error:
                    LogError(ex, message);
                    break;
                case EnumLogLevel.Trace:
                    LogTrace(message);
                    break;
            }
        }

        public void LogDebug(string message)
        {
            _nLogger.Debug(message);
        }

        public void LogError(Exception ex, string message)
        {
            _nLogger.Error(ex, message);
        }

        public void LogInfo(string message)
        {
            _nLogger.Info(message);
        }

        public void LogWarning(string message)
        {
            _nLogger.Warn(message);
        }

        public void LogTrace(string message)
        {
            _nLogger.Trace(message);
        }
    }
}
